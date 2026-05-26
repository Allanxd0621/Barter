const loginBtn = document.getElementById('loginBtn');
const username = document.getElementById('username');
const password = document.getElementById("password");
const confirmPage = document.querySelector(".confirmPage");

loginBtn.addEventListener("click" , function(){

if(username.value.includes("@gmail.com")){ // if username's value includes a @gmail.com //

    confirmPage.classList.toggle("confirmVisible");
    
}else{
    alert('please provide your proper Gmail account');
}
   


});



const continueBtn = document.getElementById('continue');

continueBtn.addEventListener("click" , function(){

window.location.href="home.html"

});