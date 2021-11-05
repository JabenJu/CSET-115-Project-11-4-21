let username = $("#user").text()
let password = $("#pass").text()

function signUp()
{
localStorage.setItem("username", username)
localStorage.setItem("password", password)
}
