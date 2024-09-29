function Person(name){
    this.name=name;
}
let john=new Person("John");

console.log(john.constructor===Person);

//contructor overWrite the proprty manually
function Dog(name)
{
    this.name=name;
}
let Rover=new Dog("Rover");

Rover.constructor=Person;//manually overwrite the constructor manually

console.log(Rover.constructor===Dog);
console.log(Rover.constructor===Person);