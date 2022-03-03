

//Creating Elements
const newHeading=document.createElement('h2');
//Add id
newHeading.id= 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('Task List'));// <h2 id="task-title">Task List </h2>

//get the old heading
const oldHeading =document.getElementById('task-title');
//Parent (we select this becoz we need to do operations on child)
const cardAction = document.querySelector('.card-action');

//Replace Element
cardAction.replaceChild(newHeading , oldHeading); 

//Remove Element
const lis= document.querySelectorAll('li');
const list = document.querySelector('ul')

//Remove list item
lis[0].remove(); //it will remove the index 0 list item

//Remove child ELement
list.removeChild(lis[3])


//Classes
const firstLi =document.querySelector('li:first-child');

console.log(firstLi.children[0]);

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test'); // adding class
link.classList.remove('test');



//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com')

console.log(val);