// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("Assertion Passed: " + actual + " === " + expected);
    console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
   //console.log("Assertion Failed: " + actual + " !== " + expected);
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);

/*
Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
Assertion Passed: 1 === 1
*/