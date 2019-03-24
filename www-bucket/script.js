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
  'accessory-appliance-blade-cheese-1238759',
  'accessory-appliance-blade-cheese-1238760',
  'age-bacteria-biology-blue-brie-1238285',
  'beetroot-grater-rasp-grated-3505763',
  'cheese-parmesan-grated-grater-food-1100774',
  'food-spaghetti-pasta-lunch-dinner-2617533',
  'grated-cheese-grater-cheese-961152',
  'grater-bokeh-macro-toy-3671979',
  'grater-cheese-grater-rasp-cheese-2886045',
  'grater-countertop-kitchen-food-1695748',
  'grater-green-lemon-food-cooking-2462480',
  'nutmeg-grater-fresh-spice-nut-2427844',
  'parmesan-cheese-grater-1732086',
  'parmesan-garlic-baslikium-pine-nuts-1002838'
].map(fileRoot => `graters/${fileRoot}.jpg`);

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
