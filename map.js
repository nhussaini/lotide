/*
Our map function will take in two arguments:
An array to map
A callback function
The map function will return a new array based on the results of the callback function.
 */
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

//eqArrays
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

//assertArraysEqual
const assertArraysEqual = function(actual, expected) {
  //...
  if(actual === expected){
    console.log("PASS");
  } else {
    console.log("Fail");
  }
}

assertArraysEqual(eqArrays( map(words, word => word[0]), ['g', 'c', 't', 'm', 't' ]),true);
assertArraysEqual(eqArrays( map(numbers, number => number * 2 ), [1, 4, 6, 8, 10 ,12 ]),true);
assertArraysEqual(eqArrays( map(words, word => word[word.length-1] ), ['d', 'l', 'o', 'r', 'm']),true);


//Testing Our Code
//Copy in our assertArraysEqual function in order to test our map function.
//Keep in mind that it depends on eqArrays which will also have to be copied in.
//Write test cases using at least three different ways of using map.