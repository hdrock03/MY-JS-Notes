//People Constructor
function Person(firstName , lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John' , 'Doe');

console.log(person1.greeting()); // Hello there John Doe

//Customer Constructor
 function Customer(firstName, lastName, phone, membership){
    Person.call(this,firstName,lastName); //Person.call se uska property le liye jaise firstname and lastname and this nh rhega to aayega nh dono chiz
    
    this.phone = phone;
    this.membership = membership;
 }
 // Inherit the person prototype methods

 Customer.prototype = Object.create(Person.prototype)

 //create customer
 const customer1 = new Customer('tom','smith','55555555','standard');

 console.log(customer1);// Customer {firstName: 'tom', lastName: 'smith', phone: '55555555', membership: 'standard'}

//  console.log(customer1.greeting()) ;//Uncaught TypeError: customer1.greeting is not a function, here it doesnt inherit the property


 console.log(customer1.greeting());// Hello there tom smith