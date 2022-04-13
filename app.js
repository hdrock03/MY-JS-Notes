document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getUrl);
function getText(){
    fetch('data.txt')
    .then(function(res){
       // console.log(res.text());//it returns promise so we need to again do .then
       return res.text();
    })
    .then(function(data){
        console.log(data); // Some plain text Data
        document.querySelector(".output").innerHTML= data; // it will print output on screen
    })
}

function getJson(){
    fetch('customer.json')
    .then(function(data){
        // console.log(data.json());// Promise {<pending>}
        return data.json();
    })

    .then(function(res){
            console.log(res);// we will get watever is there in json
         //   document.querySelector(".output").innerHTML= res; // it will print object object on the screen not the actual output becoz in json array is threr
         let output = '';
         res.forEach(function(post){
             output += `<li>${post.title}</li>`;

         });
         document.querySelector(".output").innerHTML= output; // it will print on screen
        })
    }    

    function getUrl(){
        fetch('https://api.github.com/users')
        .then(function(data){
            // console.log(data.json());// Promise {<pending>}
            return data.json();
        })
    
        .then(function(res){
                console.log(res);// we will get watever is there in json
             //   document.querySelector(".output").innerHTML= res; // it will print object object on the screen not the actual output becoz in json array is threr
             let output = '';
             res.forEach(function(user){
                 output += `<li>${user.login}</li>`;
    
             });
             document.querySelector(".output").innerHTML= output; // it will print on screen
            })
        }    