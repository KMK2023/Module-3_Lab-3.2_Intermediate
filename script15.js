/**
 * 4.	Decimal number operations in JavaScript can lead to unexpected results, as in the following: 
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
5.	We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful: 
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

a)  Explain why the above code returns the wrong answer 
b)  Create a function currencyAddition(float1, float2) which safely adds the two 
decimal numbers float1 and float2 and returns the correct float result. 
c)  Create a function currencyOperation(float1, float2, operation) which 
safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/en- US/docs/Web/JavaScript/Reference/Statements/switch may be useful. 
d)  (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10. 
1.	HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below: 
console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true


 */
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`); // answer= "0.2 + 0.1 = 0.30000000000000004"

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //This is not working because it is converted totally to a string and the n concatenated while doing addition operation.

function currencyAdd(float1, float2) {
  return (float1 + float2).toFixed(2);
}
console.log(currencyAdd(3.098, 4.6785));

console.log((6.098, 4.6785).toFixed(3));

function currencyOperation(float3, float4, operation) {
  if (operation === "+") {
    return (float3 + float4).toFixed(2);
  } else if (operation === "-") {
    return (float3 - float4).toFixed(2);
  } else if (operation === "*") {
    return (float3 * float4).toFixed(2);
  } else if (operation === "/") {
    if (float4 !== 0) {
      return (float3 / float4).toFixed(2);
    } else {
      return "division invalid as denominator is zero";
    }
  }
}

console.log(currencyOperation(2.456, 6.139, "+"));
console.log(currencyOperation(22.5, 16.139, "-"));
console.log(currencyOperation(22.5, 16.139, "*"));
console.log(currencyOperation(22.5, 16.139, "/"));
console.log(currencyOperation(10, 0, "/"));
