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

       music.volume = 0.05;

music.play().then(() => {

    const targetVolume = 0.65;
    const fadeDuration = 20000;
    const startTime = Date.now();

    function fadeInMusic() {

        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / fadeDuration, 1);

        // Smooth easing instead of a robotic linear fade
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        music.volume = 0.05 + 
            (targetVolume - 0.05) * easedProgress;

        if (progress < 1) {
            requestAnimationFrame(fadeInMusic);
        }

    }

    fadeInMusic();

}).catch(() => {
    console.log("Music could not autoplay.");
});
        });

    } else {

        passwordError.textContent = "WRONG PASSWORD.";

        passwordInput.value = "";

        passwordInput.focus();

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
