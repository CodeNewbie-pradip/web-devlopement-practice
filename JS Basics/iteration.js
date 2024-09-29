let Person={
    name:"John",
    age:23,
    city:"NY"
}

//----using a for..in loop:
// for(let key in Person)
// {
//     console.log(key+": "+Person[key]);
// }

//Using the objecy.keys()
// Object.keys(Person).forEach(function(key){
//     console.log(key+": "+Person[key]);
// });

//using object entries
// Object.entries(Person).forEach(function([key, value]){
//     console.log(key+": "+value);
// })

//object.getOwnPropertyNames()P
Object.getOwnPropertyNames(Person).forEach(function(key){
    console.log(key+": "+Person[key]);
})