const years = [1960,1980,1990,1997,2000,2003,2005,2021];

// Calulate the ages in the years array


//ES5
// Basic js function
let ageList = [];

for(let i = 0; i < years.length; i++){
    ageList.push(2022 - years[i]);
}

console.log(ageList);

// Modern JS = ES6 - Arrow function

//map()  = Treaversing an array and performes a task return a new array with values.

let ageListES6 = years.map(year => 2022 - year);

console.log(ageListES6)


let names = ["Mehrdad", "Simon", "Marcus", "Åsa"];
//find all names that starts with "M"

//filter() traversing the array and appling the conditon. if valid story in a new array and returns it.
const namesStartingWithM = names.filter(name => name.startsWith("M"));

console.log(namesStartingWithM);