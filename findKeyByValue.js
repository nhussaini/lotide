/*
Implement the function findKeyByValue which takes in an object and a value.
 It should scan the object and return the first key which contains the given value.
 If no key with that given value is found, then it should return undefined.
 */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("Assertion Passed: " + actual + " === " + expected);
    console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
   //console.log("Assertion Failed: " + actual + " !== " + expected);
    console.log(`Assertion failled: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  //Consider using the Object.keys function to help you easily search through all the object keys.
  //Consider using for...of to loop over the keys returned by Object.keys.
  let keys = Object.keys(obj);
  //console.log(keys);
  for (let key of keys) {
    if(obj[key] === value) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);