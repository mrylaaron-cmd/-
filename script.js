const startScreen = document.getElementById("start-screen");
const passwordScreen = document.getElementById("password-screen");
const letterScreen = document.getElementById("letter-screen");

const passwordInput = document.getElementById("password-input");
const submitPassword = document.getElementById("submit-password");
const passwordError = document.getElementById("password-error");

const music = document.getElementById("background-music");


/* CHANGE THIS LATER */
const correctPassword = "apakabar?";


/* SCREEN 1 → SCREEN 2 */

startScreen.addEventListener("click", () => {

    startScreen.classList.remove("active");
    passwordScreen.classList.add("active");

    passwordInput.focus();

});


/* CHECK PASSWORD */

function checkPassword() {

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {

    passwordScreen.classList.remove("active");
    letterScreen.classList.add("active");

    music.volume = 1;

    music.play()
        .then(() => {
            console.log("Music started!");
        })
        .catch((error) => {
            console.log("Music error:", error);
        });

} else {

    passwordError.textContent = "WRONG PASSWORD.";

    passwordInput.value = "";

    passwordInput.focus();

}

    }
}


/* ENTER BUTTON */

submitPassword.addEventListener("click", checkPassword);


/* ENTER KEY */

passwordInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        checkPassword();
    }

});
