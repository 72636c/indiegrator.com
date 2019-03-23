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

/**
 * Backlinks:
 *
 * https://pixabay.com/photos/accessory-appliance-blade-cheese-1238759/
 * https://pixabay.com/photos/accessory-appliance-blade-cheese-1238760/
 * https://pixabay.com/photos/age-bacteria-biology-blue-brie-1238285/
 * https://pixabay.com/photos/beetroot-grater-rasp-grated-3505763/
 * https://pixabay.com/photos/cheese-parmesan-grated-grater-food-1100774/
 * https://pixabay.com/photos/food-spaghetti-pasta-lunch-dinner-2617533/
 * https://pixabay.com/photos/grated-cheese-grater-cheese-961152/
 * https://pixabay.com/photos/grater-bokeh-macro-toy-3671979/
 * https://pixabay.com/photos/grater-cheese-grater-rasp-cheese-2886045/
 * https://pixabay.com/photos/grater-countertop-kitchen-food-1695748/
 * https://pixabay.com/photos/grater-green-lemon-food-cooking-2462480/
 * https://pixabay.com/photos/nutmeg-grater-fresh-spice-nut-2427844/
 * https://pixabay.com/photos/parmesan-cheese-grater-1732086/
 * https://pixabay.com/photos/parmesan-garlic-baslikium-pine-nuts-1002838/
 */

const graters = [
  'https://cdn.pixabay.com/photo/2015/09/27/18/52/grated-cheese-961152_640.jpg',
  'https://cdn.pixabay.com/photo/2015/10/23/11/23/food-1002838_640.jpg',
  'https://cdn.pixabay.com/photo/2015/12/20/06/13/cheese-1100774_640.jpg',
  'https://cdn.pixabay.com/photo/2016/03/05/19/10/age-1238285_640.jpg',
  'https://cdn.pixabay.com/photo/2016/03/05/20/26/accessory-1238759_640.jpg',
  'https://cdn.pixabay.com/photo/2016/03/05/20/27/accessory-1238760_640.jpg',
  'https://cdn.pixabay.com/photo/2016/09/26/11/36/grater-1695748_640.jpg',
  'https://cdn.pixabay.com/photo/2016/10/11/16/44/parmesan-1732086_640.jpg',
  'https://cdn.pixabay.com/photo/2017/06/21/16/57/nutmeg-2427844_640.jpg',
  'https://cdn.pixabay.com/photo/2017/07/01/19/59/grater-2462480_640.jpg',
  'https://cdn.pixabay.com/photo/2017/08/10/03/05/food-2617533_640.jpg',
  'https://cdn.pixabay.com/photo/2017/10/24/20/27/grater-2886045_640.jpg',
  'https://cdn.pixabay.com/photo/2018/06/29/10/41/beetroot-3505763_640.jpg',
  'https://cdn.pixabay.com/photo/2018/09/12/12/00/grater-3671979_640.jpg'
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
