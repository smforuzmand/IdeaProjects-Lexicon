// Arrays

let names = ["Simon","Mehrdad", "Åsa","Marcus" ];

names[0] = "Test";
console.log(names[0]);
console.log(names);

// console.log(names.sort()); //[ 'Marcus', 'Mehrdad', 'Test', 'Åsa' ]

//console.log(names.reverse()); // [ 'Marcus', 'Åsa', 'Mehrdad', 'Test' ]


names.push("Kent"); // Addes to the end of array
console.log(names);

// names.pop(); // Removes the last element in array

// names.shift(); // Removes the first element in Array

names.splice(1,2);
console.log(names);

const nameToFind = "Kent";
const index = names.findIndex(elementValue => elementValue === nameToFind);

console.log(index); // 2
console.log(names[index]); // Kent

console.log(names.join(","));