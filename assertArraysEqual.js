/*
The message will be similar to that of assertEqual.
 In fact, you could refer to the code for assertEqual to help you implement this.
  Instead of doing a simple === check though, this assertion function
   will make use of your eqArrays function for array comparison.
 */

const eqArrays = function(array1 , array2 ) {
  flag = true;
  for(let i = 0 ; i < array1.length ; i++){
    if(array1[i] === array2[i]){
      flag = true;
    } else {
      flag = false;
    }
  }
  console.log(flag ? "Arrays are equal" : "Arrays are not equal");
};

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false