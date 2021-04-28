//Implement middle which will take in an array and return the middle-most element(s) of the given array.
/*The middle function should return an array with only the middle element(s) of the provided array.
 This means that the length of the returned elements could vary.*/
 /*
For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []
*/
//For arrays with odd number of elements, an array containing a single middle element should be returned
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  //...
  flag = true;
  for(let i = 0 ; i < array1.length ; i++){
    if(array1[i] === array2[i]){
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
}

const assertArraysEqual = function(actual, expected) {
  //...
  if(actual === expected){
    console.log("PASS");
  } else {
    console.log("Fail");
  }
}

const middle = function(array) {
  let middleArray = [];
  let medium = 0;
  if (array.length === 1 || array.length ===2 ) {
    middleArray = [];
  } else if(array.length % 2 === 0){
    medium = array.length / 2;
    //console.log(medium);
    middleArray = array.slice(medium-1, medium+1);
   // middleArray.push(array[medium-1]);
    //middleArray.push(array[medium]);
  }else if(array.length % 2 !== 0){
    medium = Math.floor(array.length / 2);
    //console.log(medium);
    middleArray = array.slice(medium, medium + 1);
  }
  return middleArray;

}
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]),[2, 3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]),[3, 4]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3]),[2]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]),[3]), true);
assertArraysEqual(eqArrays(middle([1]),[]), true);
assertArraysEqual(eqArrays(middle([1, 2]),[]), true);


//arrays with even number of values
//console.log(middle([1, 2, 3, 4])) // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

//arrays with odd number of values
//console.log(middle([1, 2, 3])); // => [2]
//console.log(middle([1, 2, 3, 4, 5])); // => [3]
//arrays with one or two elements
//console.log(middle([1])); // => []
//console.log(middle([1, 2])); // => []