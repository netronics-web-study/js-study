const title = document.querySelector(".hello:first-child h1");

/*console.dir(title);

title.style.color = "blue";
*/

function handleTitleClick() {
    console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);
