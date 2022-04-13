document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getUrl);

//Get local text data
function getText(){
    fetch('data.txt')
    .then(res => res.text())
    .then(data =>{
        console.log(data); // Some plain text Data
		document.querySelector(".output").innerHTML= data; // it will print output on screen
        
    })
    .catch(err => console.log(err))
}

// Get local Json Data
function getJson(){
    fetch('customer.json')
    .then(res => res.json())

    .then(data => {
            console.log(data);// 
         let output = '';
         data.forEach(function(post){
             output += `<li>${post.title}</li>`;

         });
         document.querySelector(".output").innerHTML= output; // it will print on screen
        })
        .catch(err => console.log(err));
    }

    // Get from external url
    function getUrl(){
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data =>{
            console.log(data);//   document.querySelector(".output").innerHTML= res; // it will print object object on the screen not the actual output becoz in json array is threr
             let output = '';
             data.forEach(function(user){
                 output += `<li>${user.login}</li>`;
    
             });
             document.querySelector(".output").innerHTML= output; // it will print on screen
            })
        .catch(err => console.log(err))
        }