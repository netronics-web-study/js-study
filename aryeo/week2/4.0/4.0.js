// const loginForm = document.getElementById("login-form"); // document.querySelector("#login-form")
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 1번 줄을 없애고 2, 3번 줄을 다음과 같이 바꿀 수 있음
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
