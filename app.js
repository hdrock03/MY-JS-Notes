//Function declaration
function greet(){
    console.log('hello');
}
greet(); // hello

function greet(){
    return 'hello';
}
greet();//  not give any output in console
console.log(greet()); // hello

//Passing Arguments
function greet(firstname, lastname){
    return 'hello ' + firstname + ' '+  lastname ;
}

console.log(greet ('hardik','sinha'))  // hello hardik sinha

// passing default values
function greet(firstname="hardik",lastname='name'){
    return 'hello ' + firstname + ' '+  lastname ;
}

console.log(greet()); // hello hardik sinha  here we are not passing any parameter but in function only we set the default values


//Function Expressions
const square =function(x){
    return x*x;

}

console.log(square(3)) // 9

//IMMIDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs
//The function that declare and run at the same time.

// (function(){
//     console.log('IIFE Ran..');
//   })();

// (function(name){
//     console.log('hello ' + name);
// })('hardik');

//Property Methods

const todo ={
    add: function(){
        console.log('add todo')
    },
    edit: function(id){
        console.log('edit done ' + id)
    }

}

todo.delete =function(){
    console.log('delete todo')
}

todo.add(); // add todo
todo.edit(3); //edit done 3
todo.delete(); // delete todo
