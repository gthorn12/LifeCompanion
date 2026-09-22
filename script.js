
const beginButton = document.getElementById("begin-button");
const transition = document.querySelector(".screen-transition");

beginButton.addEventListener("click", () => {
    transition.classList.add("play-transition");
    setTimeout(() => {
        document.querySelector(".splash-screen").style.display = "none";
        document.querySelector(".wake-screen").style.display = "flex";
    }, 600);
    setTimeout(() => {
        transition.classList.remove("play-transition");
    }, 1200);
});