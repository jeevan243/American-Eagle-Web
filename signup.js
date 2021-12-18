document.querySelector("#btn").addEventListener("click",signIn)

var userdata = JSON.parse(localStorage.getItem("userDataBase")) || []

function signIn(){
   var email = document.querySelector("#Email").value 
   var name = document.querySelector("#name").value 
   var password = document.querySelector("#password").value 


var user_details = {
    email:email,
    Name:name,
    password:password
}
userdata.push(user_details)

localStorage.setItem("userDataBase", JSON.stringify(userdata))


if(email == ""){
    alert("Please enter the email!")
}
else if(name == ""){
    alert("Please enter the Name!")
}
else if( password == ""){
    alert("Please enter the password!")
}
else{
    window.location.href="signIN.html"
}

}
