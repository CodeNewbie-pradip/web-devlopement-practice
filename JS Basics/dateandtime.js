//Creating Date Objects
// let specificDate=new Date(2023, 3, 14, 10, 30, 0, 0);
// console.log(specificDate);

// //Getting Date and Time Components
// let date=new Date();
// console.log(date.getFullYear()); //full year (e.g., 2024)
// console.log(date.getMonth()); //Month(0-11)
// console.log(date.getDate()); //Day of the month(1-31)
// console.log(date.getHours()); //Hour(0-23);
// console.log(date.getMinutes()); //Minute(0-59)
// console.log(date.getSeconds()); //second(0-59)
// console.log(date.getMilliseconds());//milisecond(0-999)

//Formatting Dates and Time
let date1=new Date();
// console.log(date1.toString()); //Convert to string(e.g., Wed Apr 17 2024 17:47:54 GMT+0530 (India Standard Time))
// console.log(date1.toDateString()); //convert to date string(e.g.,Wed Apr 17 2024)
// console.log(date1.toTimeString()); //18:02:18 GMT+0530 (India Standard Time)

//manipulating date
console.log(date1.getDate()+1);
console.log(date1.getMonth()+1);