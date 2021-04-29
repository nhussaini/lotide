const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("Assertion Passed: " + actual + " === " + expected);
    console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
   //console.log("Assertion Failed: " + actual + " !== " + expected);
    console.log(`Assertion failled: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //First, use the Object.keys function on both objects and compare their lengths.
  // If not equal, there's no point in going further: return false
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length){
    return false;
  } 
  // loop through the keys returned by Object.keys for one of the objects
  for(key of keys1){
    if(!Array.isArray(object1[key]) && !Array.isArray(object2[key])){
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else {
      const result = eqArrays(object1[key],object2[key]);
      //console.log("checking the result from eq:"+result)
      if(!result) {
        return false;
      }
    }
   
  }
  return true;


};

const eqArrays = function(array1 , array2 ) {
  let flag = true;
  if(array1.length !== array2.length){
    return false;
  }
  for(let i = 0 ; i < array1.length ; i++){
    if(array1[i] !== array2[i]){
      flag = false;
    } 
  }
  return flag;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
//assertEqual(eqObjects(ab, ba));
//assertEqual(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false