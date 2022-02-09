//Loop though array
const cars=['ford','tata','mahindra','honda'];

for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}

cars.forEach(function(car , index, array){
    console.log(`${index} : ${car}`);
})

const users =[
    {id:1 , name:'john'},
    {id:2 , name:'jack'},
    {id:3 , name:'mickry'},
    {id:4 , name:'sam'}
]

const ids=users.map(function(user){
    return user.id;
})

console.log(ids)