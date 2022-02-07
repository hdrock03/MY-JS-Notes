const firstName="hardik";
const lastName="sinha"
const age=24;
const str='hello there my name is hardik';
const tags= 'web designs, web development, programming';

let val;

val= firstName + lastName ;

//CONCATENATION
val= firstName + ' ' + lastName;

//APPEND
val='hardik';
val += 'sinha';

//ESCAPING
val ='that\'s awesome. i can\'t wait'

//CONCAT()
val = firstName.concat(' ', lastName); // hardik sinha

//CHANGE CASE
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//INDEXOF()
val= firstName.indexOf('r')
val= firstName.lastIndexOf('i') // it gives last occuring specified value in string

//charAt()
val= firstName.charAt('2')
// Get last char
val= firstName.charAt(firstName.length- 1) // gives last character

//substring()
// syntax= string.substring(start, end) 
//end position (up to, but not including)
val = firstName.substring(0,4) // hard

//slice()
//it extract a part of string. The slice() method returns the extracted part in a new string
// syntax= string.substring(start, end) 
//end position (up to, but not including)
val =firstName.slice(0,4); //hard
val =firstName.slice(-3); // it slices reversly

//split()
//The split() method splits a string into an array of substrings.

// The split() method returns the new array.

// The split() method does not change the original string.

// If (" ") is used as separator, the string is split between words.
 val = str.split(' ');// (6) ['hello', 'there', 'my', 'name', 'is', 'hardik']

//  replace()
val = str.replace('hardik', 'hd'); //hello there my name is hd

//include()
val = str.includes('hello') //it check whether str is having hello or not
console.log(val)