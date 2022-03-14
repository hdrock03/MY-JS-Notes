//EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function(){
//     console.log('col');
// });

//EVENT DELEGATION

const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

// function deleteItem

function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item'); // it will work on only first link rest all link it wont console anything
    // }

    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item'); // it will work on only first link rest all link it wont console anything
        e.target.parentElement.parentElement.remove();
    }
}