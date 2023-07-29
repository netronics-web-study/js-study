const hello = document.querySelector(".hello h1");

console.dir(hello);

function handleTitleClick() {
  const currentColor = hello.style.color;
  let newColor;
  if (currentColor == "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  hello.style.color = newColor;
}

hello.addEventListener("click", handleTitleClick);
