const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    /*
    const clickedClass = "clicked";
    //classList를 사용하면 원래 class를 보존할수 있음
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    */
    h1.classList.toggle("clicked");
    //위의 코드를 토글 핳나로 작성 가능하다
}
h1.addEventListener("click", handleTitleClick);
