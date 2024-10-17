// setup variables
var userName = document.querySelector("#username")
var userPassword = document.querySelector("#password")
var loginBtn = document.querySelector("#loginbtn")

var uName=localStorage.getItem("username")
var uPassword=localStorage.getItem("userpassword")

/////////////////////////////////////////////////////////////////////////////////////////////

// boder-color change on click
userName.addEventListener("click" , function (e) {
    userPassword.parentElement.style.borderBottomColor = "#a1a1a0"
    e.target.parentElement.style.borderBottomColor= "black"
})

userPassword.addEventListener("click" , function (e) {
    userName.parentElement.style.borderBottomColor = "#a1a1a0"
    e.target.parentElement.style.borderBottomColor= "black"
})

//////////////////////////////////////////////////////////////////////////////////////////////

// login function
loginBtn.addEventListener("click" , function(e) {
    e.preventDefault();
    if(userName.value==='' || userPassword.value==='') {
        alert("Please fill all data")
    }
    else {
        if(userName.value.trim()===uName.trim() && userPassword.value===uPassword) {
            setTimeout(() => {
                window.location="index.html"
            }, 1000);
        }
        else {
            alert("your name or password is wrong")
        }
    }
})