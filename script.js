const correctUsername = "nita";
const correctPassword = "mybaby";


document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    if (username === "" || password === "") {

        alert("Please enter your username and password.");

        return;
    }


    if (
        username === correctUsername &&
        password === correctPassword
    ) {

        alert("Login successful!");

        window.location.href = "home.html";

    } else {

        alert("Incorrect username or password.");

    }

});

const music = document.getElementById("backgroundMusic");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {

    if (music.paused) {
        music.play();
    } 
    else {
        music.pause();
    }
});

music.addEventListener("play", () => {
    playBtn.textContent = "Ⅱ";
});

music.addEventListener("pause", () => {
    playBtn.textContent = "▶";
});