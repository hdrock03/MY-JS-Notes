let val;

const list =document.querySelector('ul.collection');// it will select all the five list items
const listItem = document.querySelector('li.collection-item:first-child');

val=listItem


val= list.children[3].children;
// val = list.childNodes[0] // text
// val = list.childNodes[0].nodeName // text
// val = list.childNodes[0].nodeType // 3

val=list.firstChild// #text
val=list.firstElementChild // li.collection-item

val=list.lastChild // #text
val=list.childElementCount // li.collection-item

val = listItem.parentNode // ul.collection
val = listItem.previousSibling //#text 
val = listItem.previousSibling.previousSibling// null becoz before first list item there is no value
console.log(val)

