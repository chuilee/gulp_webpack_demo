import _findKey from 'lodash/findKey'

let users = {
  'barney':  { 'age': 31, 'active': true },
  'fred':    { 'age': 41, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
}

console.log(_findKey(users, { 'age': 1, 'active': true }))