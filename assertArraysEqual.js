/*
The message will be similar to that of assertEqual.
 In fact, you could refer to the code for assertEqual to help you implement this.
  Instead of doing a simple === check though, this assertion function
   will make use of your eqArrays function for array comparison.
 */
const eqArrays = require('./eqArrays');

  //  const eqArrays = function(array1 , array2 ) {
  //   flag = true;
  //   for(let i = 0 ; i < array1.length ; i++){
  //     if(array1[i] === array2[i]){
  //       flag = true;
  //     } else {
  //       flag = false;
  //     }
  //   } 
  //   console.log(flag);
  //   return flag;
  // };

const assertArraysEqual = function(actual, expected) {
  //...
  if(actual === expected){
    console.log("PASS: arrays are equal");
  } else {
    console.log("Fail: arrays are not equal");
  }
}
module.exports = assertArraysEqual;


// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false