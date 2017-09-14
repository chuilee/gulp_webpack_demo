import _findKey from 'lodash/findKey';

const users = {
  barney: { age: 31, active: true },
  fred: { age: 41, active: false },
  pebbles: { age: 11, active: true },
};

/* eslint-disable */
console.log(_findKey(users, { age: 1, active: true }));
/* eslint-enable */
