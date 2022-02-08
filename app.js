const person ={
    firstName: 'steve',
    lastName: 'smith',
    age: 35,
    email: 'steveaol@.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'miami',
        state: 'fl'
    },
    getBirthYear: function(){
        return 2022 - this.age;
    }
}

let val;



//Get specific Values
val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies;//(2) ['music', 'sports']
// val = person.hobbies[1]; // sports
// val = person.address.state;
// val = person.address['city'] // miami
// val = person.getBirthYear();

console.log(val)