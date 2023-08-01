const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// argument 공간을 제공하면 JS가 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣음
function onLoginSubmit(event) {
    event.preventDefault(); // preventDefault() : 어떤 evnet의 기본 행동이든지 발생하지 않도록 막아줌.
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
