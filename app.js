// NORMAL FUNCTION
// const sayHello = function(){
//     console.log('hello')
// }

//ARROW FUNCTION
// const sayHello = () =>{
//     console.log('hello')
// }

//One line function does not need braces
// const sayHello = () => console.log('hello')

//One line returns
// const sayHello = () => 'hello';

//Same as above
// const sayHello = function() {
//     return 'hello';
// } 

//Return Object
// const sayHello = () => ({msg: 'hello'})//{msg: 'hello'}

// const sayHello = (name) => console.log(`hello ${name}`)

// sayHello('hardik')


// const sayHello = (name,age) => console.log(`hello ${name} ${age}`)
// sayHello('hardik', 24)

//MAP FUNCTION
const users =['Nathan', 'Mac','John'];

// const nameLenghts = users.map(function(name){
//     return name.length;
// });

// console.log(nameLenghts) // (3) [6, 3, 4]

//Shorter
// const nameLenghts = users.map((name) =>{
//     return name.length;
// });

//Shortest
const nameLenghts = users.map(name => name.length);

console.log(nameLenghts)