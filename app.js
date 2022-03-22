// const brad = {
//     name: 'Brad',
//     age: 30
// }

// console.log(brad); // {name: 'Brad', age: 30}

// console.log(brad.age); // 30

// Person Constructor
// costructor should start with capital letter
// function Person() { 
//     this.name = 'Hardik';

// }

// const hardik = new Person(); // Person {name: 'Hardik'}
// console.log(hardik); 
// const sinha = new Person();  // Person {name: 'Hardik'} becoz in constructor we used this.name = Hardik
// console.log(sinha); 



//so we need to take argument and then watever we use we will get different names

function Person(name,age) { 
    this.name = name;
    this.age = age;

}

const hardik = new Person('Hardik', 25 ); 

const sinha = new Person('Sinha' , 32); // Person {name: 'Sinha', age: 32}
console.log(sinha); 