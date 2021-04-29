/*
It will take in two parameters as well:
The array to work with
The callback (which Lodash calls "predicate")
The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback/predicate returns a truthy value.
To keep things simple, the callback should only be provided one value: The item in the array.
 */

const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (const elem of array) {
    //console.log();
    if (!callback(elem)) {
      results.push(elem);
    } else {
      return results;
    }
  }
}

const eqArrays = function(array1 , array2 ) {
  flag = true;
  for(let i = 0 ; i < array1.length ; i++){
    if(array1[i] === array2[i]){
      flag = true;
    } else {
      flag = false;
    }
  }
  console.log(flag ? "Testing: Arrays are equal" : "Testing: Arrays are not equal");
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
eqArrays(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);



/*
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
 */