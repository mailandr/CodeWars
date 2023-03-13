"use strict";

const text1 = "the-stealth-warrior";
const text2 = "The_Stealth_Warrior";

function toCamelCase(str) {
  let newText1 = str.replace(/_/g, "-").split("-");
  if (str < 1) return str;
  const wordsUpper = [];

  for (const x of newText1) {
    wordsUpper.push(x.replace(x[0], x[0].toUpperCase()));
  }
  let finishedText = wordsUpper.join("");

  if (str[0] !== finishedText[0]) {
    const finText = finishedText.replace(
      finishedText[0],
      finishedText[0].toLowerCase()
    );
    return finText;
  }
  return finishedText;
}

console.log(toCamelCase(text1));
console.log(toCamelCase(text2));
