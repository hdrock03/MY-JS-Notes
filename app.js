//Create Element
const li= document.createElement('li'); // li

// Add Class
li.className ='collection-item'; // li.collection-item , This adds class name to it

// Add Id
li.id = 'new-item'; // li#new-item.collection-item

//Add Attribute
li.setAttribute('title','New Item');

//Create text node and append(it will add the hello world inside li)
li.appendChild(document.createTextNode('hello world'));

//Create new link element
const link = document.createElement('a');
//Add Classes
link.className= "delete-item secondary-content";
//Add icon
link.innerHtml='<i class="fa fa-remove"></i>';
//Append link to lo
li.appendChild(link);


//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);// hello world is created just like list item is there in ui

console.log(li);


