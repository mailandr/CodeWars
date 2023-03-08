const text1 = "the-stealth-warrior";
const text2 = "The_Stealth_Warrior";

function toCamelCase(str) {
  let newText1 = str.replace(/-/g, " ");
  let newText2 = newText1.replace(/_/g, " ");
  console.log(newText2);
}

toCamelCase(text1);
toCamelCase(text2);
