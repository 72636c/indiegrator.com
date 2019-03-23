'use strict';

const indies = [
  'https://avatars3.githubusercontent.com/u/687534?s=512',
  'https://avatars3.githubusercontent.com/u/8063549?s=512',
  'https://ca.slack-edge.com/T02P37LGR-U02TM0Z5X-gc25bbe22592-511',
  'https://ca.slack-edge.com/T02P37LGR-U03HF0TJK-4f8db3b3bdd1-511',
  'https://ca.slack-edge.com/T02P37LGR-U03TE87TN-daf15e097488-511',
  'https://ca.slack-edge.com/T02P37LGR-U099HC75G-c4c3b8140a1f-511',
  'https://ca.slack-edge.com/T02P37LGR-U417S0MQA-ae44b84d5381-511',
  'https://ca.slack-edge.com/T02P37LGR-U417SHHH8-16a680a1eb36-511',
  'https://ca.slack-edge.com/T02P37LGR-U94G87J5C-a25d76b8da48-511',
  'https://ca.slack-edge.com/T02P37LGR-U9ATMADFA-9e001fc65c8c-511',
  'https://ca.slack-edge.com/T02P37LGR-UBCU4RP2Q-796e10fa267e-511',
  'https://ca.slack-edge.com/T02P37LGR-UCQ279BEW-388535b9eeeb-511',
  'https://ca.slack-edge.com/T02P37LGR-UEP7HLBLL-0508772ca4e7-511',
  'https://ca.slack-edge.com/T02P37LGR-UFCSKEV45-c9499afb49c8-511',
  'https://ca.slack-edge.com/T02P37LGR-UFY1MK6NB-a7ad7d4e5496-511'
];

const graters = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/747165_ShaverRasp_LifestyleCupcakes_Cupcakes7.4x7.4.jpg/600px-747165_ShaverRasp_LifestyleCupcakes_Cupcakes7.4x7.4.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Fine_Microplane_Grating_Hard_Cheese.jpg/640px-Fine_Microplane_Grating_Hard_Cheese.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Rape-pommedeterre.jpg/448px-Rape-pommedeterre.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kuechenreibe_fcm.jpg/624px-Kuechenreibe_fcm.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/746801_FlatCoarseGrater_Lifestyle9x9.jpg/577px-746801_FlatCoarseGrater_Lifestyle9x9.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kitchen_grater.jpg/640px-Kitchen_grater.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/K%C3%BCchenreibe_2.jpg/400px-K%C3%BCchenreibe_2.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flickr_-_cyclonebill_-_Parmesan.jpg/640px-Flickr_-_cyclonebill_-_Parmesan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/K%C3%BCchenreibe_02_fcm.jpg/615px-K%C3%BCchenreibe_02_fcm.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Grating_Soft_Cheese.jpg/640px-Grating_Soft_Cheese.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Grated_carrot.jpg/640px-Grated_carrot.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/K%C3%BCchenreibe_1.jpg/400px-K%C3%BCchenreibe_1.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Carlas_Grater.jpg/576px-Carlas_Grater.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cheese_grater.jpg/441px-Cheese_grater.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/74679000_RotaryGrater_LifestyleSalad6.5x6.2.jpg/626px-74679000_RotaryGrater_LifestyleSalad6.5x6.2.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kuechenreibe_IMGP2370_wp.jpg/383px-Kuechenreibe_IMGP2370_wp.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Cheese_Grater.jpg/345px-Cheese_Grater.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Microplane.jpg/600px-Microplane.jpg'
];

const indie = document.getElementById('indie');
const grater = document.getElementById('grater');

const setRandomInterval = (fn, min = 1000, max = 5000) => {
  fn();
  setTimeout(
    () => setRandomInterval(fn, min, max),
    Math.floor(Math.random() * (max - min)) + min
  );
};

setRandomInterval(
  () => (indie.src = indies[Math.floor(Math.random() * indies.length)])
);

setRandomInterval(
  () => (grater.src = graters[Math.floor(Math.random() * graters.length)])
);
