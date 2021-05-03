const assertEqual = require('../assertEqual');
const tail = require('../tail');

//test case 1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//taste case 2, An array with one element
const result1 = tail(["Hello"]);
assertEqual(result1.length, 0); 
assertEqual(result1[0], "Lighthouse");