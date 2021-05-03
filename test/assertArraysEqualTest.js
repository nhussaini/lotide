const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false