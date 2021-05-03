const assertEqual = require('./assertEqual');
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     //console.log("Assertion Passed: " + actual + " === " + expected);
//     console.log(`Assertion passed: ${actual} === ${expected}`)
//   } else {
//    //console.log("Assertion Failed: " + actual + " !== " + expected);
//     console.log(`Assertion failled: ${actual} !== ${expected}`);
//   }
// };

const head = function(array){
  return array[0];
};
module.exports = head;
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([1]),1);
// assertEqual(head([]),1);