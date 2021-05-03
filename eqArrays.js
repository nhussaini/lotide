//Implement a function eqArrays
// which takes in two arrays and returns true or false, based on a perfect match.
/**
 eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
 */
/**
Use assertEqual to write test cases for various scenarios.
The tests can be written below the definition of your function. Here's one example to get you started.
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
 */
const assertEqual = require('./assertEqual');

const eqArrays = function(array1 , array2 ) {
  flag = true;
  for(let i = 0 ; i < array1.length ; i++){
    if(array1[i] === array2[i]){
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
};
module.exports = eqArrays;

// const assertEqual = function(actual, expected) {
//   if(actual === expected){
//     console.log("PASS");
//   } else {
//     console.log("Fail");
//   }
// };

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false