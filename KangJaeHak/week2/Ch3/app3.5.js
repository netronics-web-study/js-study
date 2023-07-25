const hello = document.querySelector(".hello h1");

console.dir(hello);

function handleTitleClick() {
  console.log("title was clicked");
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("DONOTCOPY");
}

function handleWindowOffline() {
  alert("NO WIFI");
}

function handleWindowOnline() {
  alert("THERES WIFI");
}

hello.onclick = handleTitleClick;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
