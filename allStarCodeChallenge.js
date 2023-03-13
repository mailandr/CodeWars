"use strict";

function strCount(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));

/*
// Alternative:
function strCount(str, letter) {
  return str.split(letter).length - 1;
}

const word = "Helllo";
console.log(word.split("l"));
const word2 = "Lugel";
console.log(word2.split("e"));
*/
