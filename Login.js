let ipassword = document.getElementById("loginPassword").value
let iusername = document.getElementById("loginUsername").value
let lpassword = localStorage.getItem("password")
let lusername = localStorage.getItem("username")

let wrongpassword = document.getElementById("wrongPassword")
let wrongusername = document.getElementById("wrongUsername")
let fpassword = document.getElementById("loginPassword")
let fusername = document.getElementById("loginUsername")

let budgetPageUrl = 

function login(){

    if(ipassword === lpassword && iusername === lusername){
        window.location.pathname = budgetPageUrl;
    }

    if(ipassword != lpassword){
        wrongpassword.show
        fpassword.style.borderColor = "red";
    }

    if(iusername != lusername){
        wrongusername.show
        fusername.style.borderColor = "red";
    }
}