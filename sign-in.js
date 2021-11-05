let username = null
let password = null
let loginPath = 

function signUp()
{
    username = $("#username").val()
    password = $("#password").val()
    if( isNaN(length(username) + length(password)))
    {
        alert("Please enter a valid username and password")
    }
    else
    {
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        location = loginPath
    }
}