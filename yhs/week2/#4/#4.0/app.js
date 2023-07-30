const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
    //    console.log("clcik");
}
loginButton.addEventListener("click", onLoginBtnClick);
