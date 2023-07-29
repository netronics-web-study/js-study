const hello = document.querySelector(".hello h1");

console.dir(hello);

function handleTitleClick() {
  console.log("title was clicked");
}

function handleMouseEnter() {
  hello.style.color = "blue";
}

function handleMouseLeave() {
  hello.style.color = "black";
}
hello.addEventListener("click", handleTitleClick);
hello.addEventListener("mouseenter", handleMouseEnter);
hello.addEventListener("mouseleave", handleMouseLeave);
