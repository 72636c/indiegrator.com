#!/usr/bin/env bash

domain_name='indiegrator.com'

hosted_zone_id="$(
  aws route53 list-hosted-zones-by-name \
  --dns-name "${domain_name}." \
  --output 'text' \
  --query 'HostedZones[0].Id' \
  --region 'us-east-1'
)"

echo "hosted zone id: ${hosted_zone_id}"

request_certificate() {
  local subdomain_name="${1}"

  local certificate_arn
  local change_batch
  local resource_record
  local resource_record_name
  local resource_record_type
  local resource_record_value

  certificate_arn="$(
    aws acm request-certificate \
    --domain-name "${subdomain_name}" \
    --output 'text' \
    --query 'CertificateArn' \
    --region 'us-east-1' \
    --validation-method 'DNS'
  )"

  echo "certificate arn: ${certificate_arn}"

  sleep 2

  resource_record="$(
    aws acm describe-certificate \
    --certificate-arn "${certificate_arn}" \
    --output 'json' \
    --query 'Certificate.DomainValidationOptions[0].ResourceRecord' \
    --region 'us-east-1'
  )"

  resource_record_name="$(echo "${resource_record}" | jq -r '.Name')"
  resource_record_type="$(echo "${resource_record}" | jq -r '.Type')"
  resource_record_value="$(echo "${resource_record}" | jq -r '.Value')"

  echo "resource record: ${resource_record_name} ${resource_record_type} ${resource_record_value}"

  read -r -d '' change_batch << EOF
{
  "Changes": [
    {
      "Action": "CREATE",
      "ResourceRecordSet": {
        "Name": "${resource_record_name}",
        "ResourceRecords": [
          {
            "Value": "${resource_record_value}"
          }
        ],
        "SetIdentifier": "string",
        "Type": "${resource_record_type}",
        "TTL": 300,
        "Weight": 1
      }
    }
  ]
}
EOF

  aws route53 change-resource-record-sets \
  --change-batch "${change_batch}" \
  --hosted-zone-id "${hosted_zone_id}" \
  --region 'us-east-1'
}

request_certificate "test.${domain_name}"
request_certificate "www.test.${domain_name}"

request_certificate "${domain_name}"
request_certificate "www.${domain_name}"
