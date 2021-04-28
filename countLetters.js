/*
Create a function called countLetters.
The function should take in a sentence (as a string)
 and then return a count of each of the letters in that sentence.
 For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
 */

 const countLetters = function(sentence) {
   const sentenceNoSpace = sentence.replace(/\s+/g, '');
   //console.log(sentenceNoSpace[0]);
   const counts = {};
   for(let char of sentenceNoSpace ){
     //console.log(sentenceNoSpace[0]);
    if(counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
   }
   return counts;

 }

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log("Assertion Passed: " + actual + " === " + expected);
    console.log(`Assertion passed: ${actual} === ${expected}`)
  } else {
   //console.log("Assertion Failed: " + actual + " !== " + expected);
    console.log(`Assertion failled: ${actual} !== ${expected}`);
  }
};

let result = countLetters("lighthouse in the house");
console.log(result);
//assertEqual(result1["Jason"], 1);
assertEqual(result["l"], 1);
assertEqual(result["h"], 4);

/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}
{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
 */