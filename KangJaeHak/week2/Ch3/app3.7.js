const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const clickedClass = "active";
  /*
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
  */
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);
