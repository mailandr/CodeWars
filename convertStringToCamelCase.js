const text1 = "the-stealth-warrior";
const text2 = "The_Stealth_Warrior";

function toCamelCase(str) {
  let newText1 = str.replace(/_/g, "-").split('-');
  console.log(newText1);
}

toCamelCase(text1);
toCamelCase(text2);
