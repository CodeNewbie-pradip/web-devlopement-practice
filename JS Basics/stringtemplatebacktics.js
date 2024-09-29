//interpolation
let name="Pradip";
let greeting=`Hello, ${name}`;
console.log(greeting);

//multiple line string
let multiLineString=`This is a
multi-line
string. i'm 
practising this example.`;
console.log(multiLineString);

//Embedded Expression
let num1=5;
let num2=10;
let result=`The sum of ${num1} and ${num2} is ${num1+num2},`;
console.log(result);

//Tagged template literal
function customTag(strings, ...values)
{
    console.log(strings);
    console.log(values);
}

let num3=10;
let num4=20;
customTag`The sum of ${num3} and ${num4} is ${num3+num4}`;