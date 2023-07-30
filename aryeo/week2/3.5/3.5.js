const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick; // h1.addEventListener("click", handleTitleClick); 와 같은 동작

h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = handleMouseEnter; // h1.addEventListener("mouseenter", handleMouseEnter); 와 같은 동작

h1.addEventListener("mouseleave", handleMouseLeave); // 이 형식을 더 선호함.
// .removeEventListener : event listener를 제거할 수 있음

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
