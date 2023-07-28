const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}
function handleMouseEnter() {
    //  console.log("mouse is here");
    h1.innerText = "mouse is here";
}
function handleMouseLeave() {
    h1.innerText = "mouse is gone";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier");
}
function handleWindowOffline() {
    alert("no wifi");
}
function handleWindowOnline() {
    alert("all good");
}
//h1.addEventListener("click", handleTitleClick);
h1.onclick = handleTitleClick;
//h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseenter = handleMouseEnter;
//h1.addEventListener("mouseleave", handleMouseLeave);
h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
