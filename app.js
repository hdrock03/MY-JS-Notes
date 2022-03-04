const form = document.querySelector('form');
const taskInput= document.getElementById('task');
const heading = document.querySelector('h5');

//Clear input
taskInput.value = ''; // this will clear the watever value is inside 

//Keydown
//taskInput.addEventListener('keydown', runEvent); // it fires when we click something there

//Keyup
//taskInput.addEventListener('keyup', runEvent);

//Keypress
//taskInput.addEventListener('keypress', runEvent);

//focus
//taskInput.addEventListener('focus', runEvent);// when we click it will focus it

// blur
taskInput.addEventListener('blur', runEvent);// opposite of focus

//cut
taskInput.addEventListener('cut', runEvent); // when we cut anything from targeted element

//paste
taskInput.addEventListener('paste', runEvent); // when we paste anything
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`); // yeh type bta dega jb bhi event occur hga

 // get something on webpage
 //console.log(e.target.value);// watever you write inside targeted element it will simultaneously shows in console too

 //heading.innerText = e.target.value; // watever we type it will show on webpage
}

