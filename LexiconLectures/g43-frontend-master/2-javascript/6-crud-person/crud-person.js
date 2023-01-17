const persons = [];


const createPerson = (person) => {
persons.push(person);
}

// const savePerson = createPerson(person);


const printAll = () => {
    console.log(persons);
}


const findById = (id) => {
   return persons.find((person) => person.id === id);
}


const deleteById = (id) =>{

    //Find the Index of the object.
    const index = persons.findIndex((person) => person.id === id);

    console.log("FoundPersonIndex: " + index);
    //Remove by index in the array.
    if(index >= 0){
        persons.splice(index,1);
    }else{
        throw new Error("data not found error");
    }


}



//----------------------------------------------

const person1 = {
    id: 1,
    firstName: "Simon",
    lastName: "Elbrink",
    email: "simon@lexicon.se",
    title: "Teacher"
};

createPerson(person1);
createPerson({
    id: 2,
    firstName: "Test",
    lastName: "Testsson",
    email: "test@Test.te",
    title: "Tester"
})


printAll();

console.log("----- Find By ID -----");
console.log(findById(2));
console.log("-------------------- -");


try{
    deleteById(-65478);
}catch(e){
    console.log(e.message)
}


printAll();


