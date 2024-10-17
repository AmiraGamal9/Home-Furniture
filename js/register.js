// setup variables 
var userName = document.querySelector("#username")
var userEmail = document.querySelector("#email")
var userPassword = document.querySelector("#password")
var registerBtn = document.querySelector("#registerbtn")

////////////////////////////////////////////////////////////////////////////////////////////

//boder-color change on click
userName.addEventListener("click" , function (e) {
    userEmail.parentElement.style.borderBottomColor = "#a1a1a0"
    userPassword.parentElement.style.borderBottomColor = "#a1a1a0"
    e.target.parentElement.style.borderBottomColor= "black"
})

userEmail.addEventListener("click" , function (e) {
    userName.parentElement.style.borderBottomColor = "#a1a1a0"
    userPassword.parentElement.style.borderBottomColor = "#a1a1a0"
    e.target.parentElement.style.borderBottomColor= "black"
})

userPassword.addEventListener("click" , function (e) {
    userEmail.parentElement.style.borderBottomColor = "#a1a1a0"
    userName.parentElement.style.borderBottomColor = "#a1a1a0"
    e.target.parentElement.style.borderBottomColor= "black"
})
/////////////////////////////////////////////////////////////////////////////////////////////

// regiseration function
registerBtn.addEventListener("click" ,function(e) {
    e.preventDefault();
    if (userName.value==='' || userEmail.value==='' || userPassword==='')
    {
        alert("Please fill all data")
    }
    else {
        localStorage.setItem("username" , userName.value )
        localStorage.setItem("useremail" , userEmail.value)
        localStorage.setItem("userpassword" , userPassword.value)

        setTimeout(()=> {
             window.location="login.html"
        },1000)
    }
})