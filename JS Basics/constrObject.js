//in javascript, functions are first-class citizens, which means thy are treated as objects.
//this means tahat function can be assigned to variables, passed as argument to other functions,
//returned from functions, and have properties just like any other. here's a breakdown of how function are objects

//-----1.functions can be assigned to variable:
let greet=function(){
    console.log("Hello!");
}
greet(); //Output: Hello!

//-----2.functions can be passed as argument to other functions:
function sayHello(callback){
    callback();
}
sayHello(greet);//Output:Hello!
//-----3.functions an be returned from other functions:
function createGreeting()
{
    return function()
    {
        console.log("i am creating greeting");
    }
}

let myfunction=createGreeting();
console.log(myfunction());

//-----4.function can have proprties
function greetings()
{
    console.log("Hello!");
}
greetings.language="English";
console.log(greetings.language); //Output:-English