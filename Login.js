let ipassword = null
let iusername = null
let lpassword = null
let lusername = null

let wrongpassword = null
let wrongusername = null
let fpassword = null
let fusername = null

let budgetPageUrl = 

function login(){
    ipassword = document.getElementById("loginPassword").value
    iusername = document.getElementById("loginUsername").value
    lusername = localStorage.getItem("username")
    lpassword = localStorage.getItem("password")
    wrongpassword = document.getElementById("wrongPassword")
    wrongusername = document.getElementById("wrongUsername")
    fpassword = document.getElementById("loginPassword")
    fusername = document.getElementById("loginUsername")

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