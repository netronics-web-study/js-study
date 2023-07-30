const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username); // 새로고침을 해도 username이 저장되어 있는 방법
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// localStorage.setItem("[key name], [value name]"): localStoarge에 저장
// localStorage.getItem("[key name]"): localStoarge에서 [key name]인 [value name] 불러오기
// localStorage.removeItem("[key name]"): localStoarge에서 [key name] 삭제 ([value name]도 함께)
