class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date (dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge(){
        const diff = date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
    }
}

const mary = new Person('Mary','Williams','11-13-1998');

mary.getsMarried('Thompson')// Person {firstName: 'Mary', lastName: 'Thompson', birthday: Fri Nov 13 1998 00:00:00 GMT+0530 (India Standard Time)}

console.log(mary)