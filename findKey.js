const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("Assertion Passed: " + actual + " === " + expected);
    console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
   //console.log("Assertion Failed: " + actual + " !== " + expected);
    console.log(`Assertion failled: ${actual} !== ${expected}`);
  }
};
/*
Implement the function findKey which takes in an object and a callback.
It should scan the object and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined.
 */
const findKey = function(obj, callback) {
  //Consider using the Object.keys function to help you easily search through all the object keys.
  //Consider using for...of to loop over the keys returned by Object.keys.
  let keys = Object.keys(obj);
  for (let key of keys) {
    //console.log(obj[key]);
   if(callback(obj[key])){
     return key;
   }
  }
}

//test cases
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");// => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri");// => "Akaleri"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5), undefined);// => undefined



