import _findKey from 'lodash/findKey'

let users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
}

alert(_findKey(users, { 'age': 1, 'active': true }))