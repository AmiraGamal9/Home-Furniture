let userInfo = document.querySelector(".user-info")
let uName = document.querySelector(".user")
let links = document.querySelector(".links")
let logoutBtn = document.querySelector("#logoutbtn")

if(localStorage.getItem("username")) {
    links.remove();
    userInfo.style.display="flex"
    uName.innerHTML="Welcome " + localStorage.getItem("username");
}

logoutBtn.addEventListener("click" , function () {
    localStorage.clear();
    setTimeout(()=> {
         window.location = "logout.html"
    },1000)
   
} )
