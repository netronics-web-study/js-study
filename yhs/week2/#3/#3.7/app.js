const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    /*
    if (h1.className === "clicked") {
        h1.className = "";
    } else {
        h1.className = "clicked";
    }
    이렇게 쓰면 오타 났을때 뭐가 틀렸는지 찾기 힘들어짐
    */
    const clickedClass = "clicked";
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
    //원래 있던 classname인 origin이 사라지는 문제 해결 방법?
}
h1.addEventListener("click", handleTitleClick);
