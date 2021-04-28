/*
This function should take in a source array and a itemsToRemove array.
It should return a new array with only those elements from source
that are not present in the itemsToRemove array.

Here are a couple examples, but please don't limit your testing to just these scenarios:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
 */

/*The without function should be returning a new array and not modify the original array
that is passed in*/
const without = function(list, toRemove) {
  let newList = [];
  for(let i = 0; i < list.length; i ++) {
    for (let j = 0; j < toRemove.length; j++) {
      if(list[i] !== toRemove[j] && typeof list[i] == typeof toRemove[j]) {
        newList.push(list[i]);
      }
    }
  }
  return newList
}
//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

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

const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log("PASS");
  } else {
    console.log("Fail");
  }
};

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(without([1,2,3],[1]),[2,3]),true);
assertEqual(eqArrays(without(["1", "2", "3"],[1, 2, "3"]),["1", "2"]),true);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertEqual(eqArrays(words, ["hello", "world", "lighthouse"]));