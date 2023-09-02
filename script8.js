/**
 * 
 * 8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers. 
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
a)  Create a new phoneBookDEF Map to store names beginning with D, E or F 
b)  Initialise the contents of phoneBookDEF by passing in an array of keys/values 
c)  Update the phone number for Caroline 
d)  Write a function printPhoneBook(contacts) that prints the names and phone 
numbers in the given Map 
e)  Combine the contents of the two individual Maps into a single phoneBook Map 
f)  Print out the full list of names in the combined phone book 

 */

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')


const phoneBook1 = new Map([ ["Annabelle", "98798797"], ["Barry", "65465465"], ]); 
const phoneBook2 = new Map([["Caroline", "987987456"]]); 
phoneBook2.forEach((value, key) => { phoneBook1.set(key, value); }); 
console.log(phoneBook1);

