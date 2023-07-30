const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event) 
    event.preventDefault();{
    console.log(event);
    alert("clicked");
    //alert로 인해 메시지가 뜨는 동안 넘어가는 것을 막음
    //하지만 메시지를 닫으면 기본 동작이 실행됨

}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
//함수 이름 뒤에 ()넣으면 한번 직접 실행시키고 끝임 
//괄호 없이 호출만 하면 직접 실행이 아님