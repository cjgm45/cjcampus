function login(){

let batch=document.getElementById("batch").value;

let password=document.getElementById("password").value;

if(batch===""||password===""){

document.getElementById("msg").style.color="red";

document.getElementById("msg").innerHTML="Please enter Batch Number and Password";

return;

}

document.getElementById("msg").style.color="green";

document.getElementById("msg").innerHTML="Login Successful";


// Later we will connect Node.js API here
// fetch("http://localhost:5000/login")

}