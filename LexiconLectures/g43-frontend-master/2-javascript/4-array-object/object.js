//Object  in js is an entity that has state(field) and behavior(methods).
//State is information that we attach to the object.

const calculator = {
    num1: 30,
    num2: 20,

    addition : function(){
        return this.num1 + this.num2;
    },
    subtraction : function(){
        return this.num1 - this.num2;
    }
}

console.log(calculator.subtraction());

const volvoCar = {

    brand: "Volvo",
    model: "XC60",
    year: 2022,
    color: "grey",

    profile_URL: "http://www.volvo.se/model/xc60_pic.jpg"
}

// ... a Spread operator = makes a clode of the object.
let _newVolvoXC60 = {...volvoCar, gearbox: "Automatic"}

console.log(_newVolvoXC60);

