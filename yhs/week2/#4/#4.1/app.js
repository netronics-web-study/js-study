/*
//option 1
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/
//option 2
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    /*
    if (username === "") {
        alert("please write your name");
    } else if (username.length > 15) {
        alert("name is too loooooooooooong");
    }
    */
    //js로 이렇게 안하고 자체 기능 사용하는 것이 더 좋음
    console.log(username);
}
loginButton.addEventListener("click", onLoginBtnClick);
