//String Methods

let firstName = "Simon";

console.log(firstName.startsWith("s")); // false
console.log(firstName.endsWith("mon")); //true
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());


// DATE

const currentDate = new Date();

console.log(currentDate);
console.log(currentDate.getDate());
console.log(currentDate.getMonth()); // Month Starts at 0 (0-11)
console.log(currentDate.getTime());

console.log(currentDate.toString());
console.log(currentDate.toISOString());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());


