/**
 * 
 * 10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following: 
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
a)  Print the total number of minutes that have passed so far today 
b)  Print the total number of seconds that have passed so far today 
c)  Calculate and print your age as: 'I am x years, y months and z days old' 
d)  Write a function daysInBetween(date1, date2) which calculates and returns the amount 
of days in between the two given dates. 

 */

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())

const currentHours=today.getHours();
console.log(currentHours + ' hours have passed so far today');

const currentMinutes = today.getMinutes();
console.log(currentMinutes + ' minutes have passed so far today');

const currentSeconds = today.getSeconds();
console.log(currentSeconds + ' seconds have passed so far today');

// Calculate and print your age as: 'I am x years, y months and z days old' 

const d = new Date();
let yearNow = d.getFullYear();
console.log(yearNow);

function age(year){yearNow-year};
console.log('my current age is '+ age(2000));