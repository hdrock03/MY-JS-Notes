const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
//clearBtn.addEventListener('click', runEvent); // EVENT TYPE: click

//DoubleClick
//clearBtn.addEventListener('dblclick', runEvent); // EVENT TYPE: dblclick

//Mousedown
//clearBtn.addEventListener('mousedown', runEvent); //EVENT TYPE: mousedown , just click and it will give

//Mouseup
// clearBtn.addEventListener('mouseup', runEvent); //EVENT TYPE: mouseup , just click and hold and when we leave the hold then it will give

//Mouseenter
//clearBtn.addEventListener('mouseenter', runEvent); // EVENT TYPE: mouseenter , just hover the cursor into the targeted element(i.e. clear button)

//Mouseleave
clearBtn.addEventListener('mouseleave', runEvent);// EVENT TYPE: mouseleave

//Mouseover
clearBtn.addEventListener('mouseover', runEvent);

//Mouseout
clearBtn.addEventListener('mouseout', runEvent);

//Mousemove
clearBtn.addEventListener('mousemove', runEvent);// clearbtn ke under jitna mouse ghumayange utna baar likhayega
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`); 
}