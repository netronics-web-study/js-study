const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    /*    if (h1.Style.color === "blue") {
        h1.Style.color = "tomato";
    } else {
        h1.Style.color = "blue";
    }
*/
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

/*
1. element 찾기
2. event를 listen
3. event에 react
*/
