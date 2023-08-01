// class hello를 가진 div 내부의 firtst-child인 h1을 찾아오는 것
const title = document.querySelector("div.hello:first-child h1");

// console.log(title);
console.dir(title); // object로 표시한 element 보여줌. 그 중 'on'으로 시작하는 것들은 event.

// title.innerText = "Hello";

// h1의 style 변경
// title.style.color = "blue";

// click event를 listen 하고, 그 후 handleTitleClick 이라는 함수 실행
function handleTitleClick() {
    title.style.color = "blue";
    // console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick); //function에 () 추가 하지 않기
