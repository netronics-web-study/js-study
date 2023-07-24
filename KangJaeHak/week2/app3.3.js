const hello = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was clicked");
}

hello.addEventListener("click", handleTitleClick);
