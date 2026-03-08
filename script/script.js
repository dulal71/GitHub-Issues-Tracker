

document.getElementById("login-btn")
 .addEventListener("click",function(){
 const input = document.getElementById("username");
 const inputValue =input.value;
 const password = document.getElementById("login-password");
const passwordValue = password.value;
 if(inputValue !== 'admin'){
    alert("Invalid Username");
    return;
 }
 
if(passwordValue !=='admin123'){
    alert("Invalid Password");
    return;  
}else{
    alert('Login Successfully')
     window.location.assign("home.html"); 
}

 })


 function scope(){
    let x = 'hello';
 }
 console.log(x);