const title = document.querySelector(".hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    title.style.color = "blue";
}
function handleMouseEnter() {
    //  console.log("mouse is here");
    title.innerText = "mouse is here";
}
function handleMouseLeave() {
    title.innerText = "mouse is gone";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
