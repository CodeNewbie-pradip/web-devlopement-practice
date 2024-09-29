//-------------------Adding properties---------
let Person={
    firstName:"Pradip",
    lastName:"Labade", 
}

Person.age=30;
Person.gender="Male";

console.log(Person);

//----------Modifying Properties------------
Person.age=23;
console.log(Person);

//---------Deleting Properties-------------
delete Person.gender;
console.log(Person);

//---------Dynamic method Addition----------
Person.sayHello=function(){
    return "Hello Everyone, My name is "+this.firstName+" "+this.lastName;
}
console.log(Person.sayHello());

//---------Propety Acessors ---------------
//JavaScript objects support dynamic property accessors, which allow you to access properties using variables or expressions
let PropetyName="age";
console.log(Person[PropetyName]);

//---------Prototype Chain ----------------
//JavaScript objects also have a prototype chain, which allows properties and methods to be inherited dynamically:
let Student={
    grade:"A"
}
Student.__proto__=Person;
console.log(Student)
