/**
4.	Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. 
The function should remove all dashes, and uppercase the first letter of each word after a dash. 
b) Create variants of the camelCase function that use different types of for loops, and c) with and without the conditional operator. 
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display
 */


function camelCase(word) {
    const parts = word.split('-');
    
    // Capitalize the first letter of each part (except the first one)
    for (let i = 1; i < parts.length; i++) 
{console.log(parts);
      parts[i] = 
      parts[i].charAt(0).toUpperCase() + 
      parts[i].slice(1);
     console.log(parts[i]);
    }
  // Joining the parts together to form camelCase
    return parts.join('');
  }
  
  const input = "margin-left-right";
  const camelCased = camelCase(input);
  console.log(camelCased); // Output: "marginLeft"

