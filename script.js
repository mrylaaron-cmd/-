const startScreen = document.getElementById("start-screen");
const passwordScreen = document.getElementById("password-screen");
const letterScreen = document.getElementById("letter-screen");

const passwordInput = document.getElementById("password-input");
const submitPassword = document.getElementById("submit-password");
const passwordError = document.getElementById("password-error");

const music = document.getElementById("background-music");


/* YOUR PASSWORD */
const correctPassword = "yourpassword";


/* =========================
   SCREEN 1
========================= */

startScreen.addEventListener("click", function () {

    console.log("Start screen clicked!");

    startScreen.classList.remove("active");
    passwordScreen.classList.add("active");

    passwordInput.focus();

});


/* =========================
   PASSWORD
========================= */

function checkPassword() {

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {

        passwordScreen.classList.remove("active");
        letterScreen.classList.add("active");

        music.volume = 1;

        music.play().catch(function (error) {
            console.log("Music error:", error);
        });

    } else {

        passwordError.textContent = "WRONG PASSWORD.";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* =========================
   ENTER BUTTON
========================= */

submitPassword.addEventListener("click", checkPassword);


/* =========================
   ENTER KEY
========================= */

passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});
