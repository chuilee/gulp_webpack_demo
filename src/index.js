import _findKey from 'lodash/findKey';

const imgWebpack = require('./components/login/images/2105791.png');

const img = new Image();
document.body.appendChild(img);
img.src = imgWebpack;

const users = {
  barney: { age: 31, active: true },
  fred: { age: 41, active: false },
  pebbles: { age: 11, active: true },
};

/* eslint-disable */
console.log(_findKey(users, { age: 1, active: true }));
/* eslint-enable */
