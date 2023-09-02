/**
 * 9. Given the below salaries object, perform the following tasks. 
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
}; 

a)  Write a function sumSalaries(salaries) that calculates and returns the total of all salaries 
b)  Write a function topEarner(salaries) that calculates and returns the name of the person 
earning the highest salary 
 */

// Write a function sumSalaries(salaries) that calculates and returns the total of all salaries 

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
}; 

function sumSalaries(salaries) {
let totalSalary = 0;
for (let key in salaries) {totalSalary += salaries[key];
}
return totalSalary;}

console.log(sumSalaries(salaries));


// b)  Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary 

function topEarner(salaries) {
    let highestSalary = 0;
    let topEarnerName = "";

    for (let name in salaries) {
        if (salaries[name] > highestSalary) {
            highestSalary = salaries[name];
            topEarnerName = name;
        }
    }

    return topEarnerName;
}


let topEarnersName = topEarner(salaries);
console.log(`The top earner is: ${topEarnersName}`);