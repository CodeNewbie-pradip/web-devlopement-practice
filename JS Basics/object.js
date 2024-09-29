// -----Literal Notation-----
// let person={
//     firstName: "pradip",
//     lastName: "Labade",
//     age:24,

//     fullName: function()
//     {
//         return this.firstName+" "+this.lastName;
//     }
// };

//let object=person.fullName();
// console.log(person.fullName());

//using new object() constructor:
// let person=new Object();
// person.firstName="Pradip";
// person.lastName="Labade";
// person.age=21;
// person.fullName=function(){
//     return this.firstName+" "+this.lastName;
// };
// console.log(person.fullName());

//------------------factory function----------------
function createPerson(firstName, lastName, age)
{
    return{
        firstName:firstName,
        lastName:lastName,
        age:age,
        fullName:function()
        {
            return this.firstName+" "+this.lastName+" "+this.age;
        }
    }
}
let person1=createPerson("Pradip", "Labade", 23);
let person2=createPerson("suyash", "Shinde", 21);

console.log(person1.fullName());
console.log(person2.fullName());

//--------------Constructor---------------
function Person(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.fullName=function()
    {
        return this.firstName+" "+this.lastName;
    }
}
let Person3=new Person("John", "Doe", 30);
let Person4=new Person("Jane", "Smith", 25);

console.log(Person3.fullName());
console.log(Person4.fullName());
