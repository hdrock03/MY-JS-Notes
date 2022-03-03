document.querySelector('.clear-tasks').addEventListener('click',function(e){
    console.log('hello world');

    
})

document.querySelector('.clear-tasks').addEventListener('click',onclick);

// e is just an event nothing else
function onclick(e){
    // console.log('clicked');

    let val;

    val = e;

    
    console.log(val); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

    // Event target element
    val = e.target; // it will give that actual element which we are targeting. here we are targeting button (clear tasks)
    val = e.target.id;// it will give id associated with it, since here no id so no result
    val = e.target.className; // clear-tasks btn black, these are classes associated with it


    //Event type
    val= e.type; // click, since it has type click if it is written there mouseover then it would have shown mouseover

    //Timestamp
    val = e.timeStamp;// it will give time

    //Coordinate event relative to the window
    val= e.clientY;
    val= e.clientX;

    //Coordinate event relative to the element
    val= e.offsetY;
    val= e.offsetX;

    console.log(val);//
}