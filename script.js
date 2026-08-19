const correctUsername = "nita";
const correctPassword = "mybaby";


document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    

    if (username !== "" && password === "") {
        alert("Please enter your password");
        return;
    }

    else if (username === "" && password !== "") {
        alert("Please enter your username");
        return;
    }

    else if (username === "" && password === "") {
        alert("Please enter your username and password.");
        return;
    }

    if (username === correctUsername &&
        password === correctPassword) {
        window.location.href = "home.html";
    } 
    else {
        alert("Incorrect username or password.");
    }

});