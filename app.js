let val;

var today = new Date();// Tue Feb 08 2022 15:17:39 GMT+0530 (India Standard Time)
let birthday = new Date('9-10-81 11:33:27')
birthday = new Date('Septmber 10 1981');
birthday = new Date('9/10/1981')

// var today = new Date('1-1-2017')// it give month as 0 becoz january starts with 0 and december ends with 11
val=today.getMonth();
val= today.getDate();
val= today.getDay();// if today is wednesday it will give 3 becoz sunday starts with 0
val=today.getFullYear();// 2022
val= today.getTime();// it will give how many seconds passed from jan 1st of current year


birthday.setMonth(2);// it will set month to march
birthday.setDate(12);
birthday.setFullYear(1989)
console.log(birthday)