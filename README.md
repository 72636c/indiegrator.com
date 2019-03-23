# indiegrator.com

[![Build Status](https://cloud.drone.io/api/badges/72636c/indiegrator.com/status.svg)](https://cloud.drone.io/72636c/indiegrator.com)

## Setup

```shell
scripts/request-certificates.sh
```

## Deployment

### Test

```shell
AWS_REGION=us-east-1 ENVIRONMENT=test stratus deploy

aws s3 sync naked-bucket s3://test.indiegrator.com
aws s3 sync www-bucket s3://www.test.indiegrator.com
```

### Prod

```shell
AWS_REGION=us-east-1 ENVIRONMENT=prod stratus deploy

aws s3 sync naked-bucket s3://indiegrator.com
aws s3 sync www-bucket s3://www.indiegrator.com
```
