const text1 = "the-stealth-warrior";
const text2 = "The_Stealth_Warrior";

function toCamelCase(str) {
  let newText1 = str.replace(/_/g, "-").split('-');
  const wordsUpper = [];

  for (const x of newText1) {
    wordsUpper.push(x[0].toUpperCase() + x.slice(1));
  }
  if (str[0] === str[0].toLowerCase) {
    console.log(wordsUpper[0].toLowerCase + wordsUpper.slice(1));
  } else {
    console.log(wordsUpper.join(''));
  }
}

toCamelCase(text1);
toCamelCase(text2);
