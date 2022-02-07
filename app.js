// Create some Arrays
const number= [43,67,8,45,28,5];
const number2 = new Array(22,33,44,55,66);
const fruit = ['banana','orange', 'apple','pear'];
const mixed = [22,'apple', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Get array length
val= number.length;

//Check if it array
val= Array.isArray(number); //true

//Get single value
val= number[3]; //45

//Insert into Array
number[2]= 99; // (6) [43, 67, 99, 45, 28, 5]

//Find index of value
val= number.indexOf(28)

//MUTATING ARRAYS
//ADD ON TO THE END
number.push(20) //  (7) [43, 67, 99, 45, 28, 5, 20]

//ADD ON TO THE FRONT
number.unshift(120) // (8) [120, 43, 67, 99, 45, 28, 5, 20]

//TAKE OFF FROM BACK
number.pop() // 20 gets popped out of array

//TAKE OFF FROM FRONT
number.shift(); // 120 gets popped out of array

// SPLICE VALUES
// number.splice(1,3)// it means i want to remove index start from 1 and ends to 3 only

//REVERSE
number.reverse();// (6) [5, 28, 45, 99, 67, 43]

//CONCATENATE Arrays
val= number.concat(number2) //(11) [5, 28, 45, 99, 67, 43, 22, 33, 44, 55, 66]

// Sorting Arrarys
val= fruit.sort();// (4) ['apple', 'banana', 'orange', 'pear']
val= number.sort(); // (6) [28, 43, 45, 5, 67, 99] if you could see it is sorted as of 1st digit of arrays are in increasing order

//Use the "compare function"
val= number.sort(function(x,y){
    return x-y; //(6) [5, 28, 43, 45, 67, 99]
})

//reverse sorting
val= number.sort(function(x,y){
    return y-x;  // (6) [99, 67, 45, 43, 28, 5]
})

console.log(number)
console.log(val)