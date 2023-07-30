const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
/*
function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);
    //감지는 하지만 아직 submit으로 인한 새로고침을 못막음
}
*/
/*
 */
function onLoginSubmit(event) {
    event.preventDefault();
    // event의 default behavior을 방지함
    //여기서는 새로고침을 막음
    console.log(loginInput.value);
}
/*
argument 공간에 방금 일어난 event에 대한 정보를 지닌 argument를 알아서 채워줌
*/
loginForm.addEventListener("submit", onLoginSubmit);
