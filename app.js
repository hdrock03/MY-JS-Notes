 document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    console.log('1')
    //Create an XHR object
    const xhr = new XMLHttpRequest();

    // so this has some properties
    //OPEN - iT IS SOMENTHING WHERE WE CAN SPECIFY THE TYPE OF REQUEST OR THE URL OR FILE NAME WE WANT TO MAKE IT TO
    // SYNTAX- varname('the type of req we are gonna get to the file', 'file', for asynchronous it must be true)
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText) //1 app.js:15 Some plain text Data
            
        }

    }

    xhr.send();

    //HTTP Status
    // 200: "OK"
    // 403: "fORBIDDEN"
    // 404: "Not found"

    //readystate values 
    // 0 : request not initiaized
    // 1 : server connection established
    // 2 : request received
    // 3 : processing request 
    // 4 : request finished and response is ready
}

