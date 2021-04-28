const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0 ; i < sentence.length; i++) {
    //console.log(sentenceNoSpace[i]);
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i];
      }
    }
 }
  return results;
};
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
assertArraysEqual(eqArrays(letterPositions("hello").e, [1]),true);
/*
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
 */