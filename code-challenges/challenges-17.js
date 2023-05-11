'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    let arr =[];
    for(let i = int1; i >= -(int1); i -= int2){
      
      if (i >= 0){
        arr.push(i) 
      }else{
        arr.push(i) 
        console.log(i)
      
        break;
      }
    }
  let last = arr.slice(-1)[0];
    console.log(last)
  for(let i = last + int2; i <= int1; i += int2){

        arr.push(i) 
    }

  
    return(arr)
   
}

//by recursion
// const recursionPattern = (int1, int2) => {
//   if (int1 <= 0) {
//       return [int1];
//   }

//   return [int1].concat(recursionPattern(int1 - int2, int2), [int1]);
// }

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    const regex = /(www){1}.(\w)+(\W)+(com|org)/g;
    let link = (str.match(regex))
   return link[0];

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
  let before = str.split("")
  for (let i = 0; i < before.length; i++) {
    if (before[i] === "," || before[i] === " " ||  before[i] === ":"|| before[i] === "."||  before[i] === "''"||  before[i] === ";"||  before[i] === "''"||  before[i] === "'") {
      before.splice(i, 1, "");
    }
  }
  
  let mid = before.join("")
  let minLa = mid.toLowerCase();
  let after = before.reverse()
  let after2 = after.join("")
  let afterLa = after2.toLowerCase();
  if(afterLa === minLa ){
    return(true);
  }else{
    return(false);
  }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
  const x = str.split("");
  const unique1 = [...new Set(x)];
  const unique2 = [...new Set(arr)];
  console.log(unique2)
  if(unique1.length === unique2.length){
  return(true);
  }else{
    return(false);
  }
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };