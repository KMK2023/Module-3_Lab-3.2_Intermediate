/**
Module 3 _Labs 2_JS Intermediate 

1.	Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, as in the example below. Test it with different strings. 
console.log(ucFirstLetters("los angeles") ) //Los Angeles


console.log(ucFirstLetters("los angeles") ) //Los Angeles

*/
/** 
const text = 'Los Angeles'
const word=text.split(' ')
console.log(text.split)

const upperCase = for (let i=0, i<origText.length, i++){const word= word[i];}
const ucWord = word.charAt(0).toUpperCase()+ word.substrinng(1);
// uppercaseWords.push(ucWord); // } 
// map - return // forEach - returns nothing 
// filter - reduce or filter the array elements const uppercaseWords = words.map((word) => { const ucWord = word.charAt(0).toUpperCase() + w

*/

const text = "Los Angeles";
const words = text.split(' '); // Split the text into an array of words
console.log(words); // Log the array of words
console.log(text); // Log the original text

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  console.log(word);

  const upperCaseWord = word.charAt(0).toUpperCase() + word.substring(1);
  console.log(upperCaseWord);
}// ["los", "angeles"] 
// const uppercaseWords = [ ]; 
// for (let i = 0; i < words.length; i++) { // const word = words[i]; 
// const ucWord = word.charAt(0).toUpperCase() + word.substring(1); 
// uppercaseWords.push(ucWord); // } 
// map - return // forEach - returns nothing 
// filter - reduce or filter the array elements const uppercaseWords = words.map((word) => { const ucWord = word.charAt(0).toUpperCase() + w


