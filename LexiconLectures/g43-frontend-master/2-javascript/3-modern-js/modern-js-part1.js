//ES6 Modern Javascript

//let & const

let number = 10; // let are mutable.
number = 50;
console.log(number);

const PI = 3.14; // const variable are inmutable
// PI = 3.1; // Makes Error

const API_URL = "http://localhost:8080/api/v1/person";



//Scopes

function display(){
    console.log("display function has been triggered");

    var firstName = "Marcus";

    console.log(firstName);
}
//console.log(firstName);
display();

function checknumber (input) {
    const result = input % 2

    if(result === 0){
        const temp = "HELLO";
        console.log("EVEN")
    }else{
        console.log("ODD")
    }

    //console.log(temp);
}

checknumber(20);

//console.log(result)


function sum(n1,n2){
    return n1 + n2;
}

var summarize = function(n1,n2){
    return n1 +n2
};

const modernSum = (n1,n2) => { 
    return n1 +n2
};

const modernShorterSum = (n1,n2) => n1+n2;




