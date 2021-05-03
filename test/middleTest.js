const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require ('../assertArraysEqual');


assertArraysEqual(eqArrays(middle([1, 2, 3, 4]),[2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3, 4]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3]),[2]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]),[3]), true);
assertArraysEqual(eqArrays(middle([1]),[]), true);
assertArraysEqual(eqArrays(middle([1, 2]),[]), true);