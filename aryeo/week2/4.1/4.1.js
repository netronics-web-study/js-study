const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    // 아래의 코드는 선호하지 않는 방법
    // if (username === "") {
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long.");
    // }

    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);

// HTML에서의 규칙: form 안에서 enter를 누르고 input이 더 존재하지 않는다면 자동으로 submit 됨.
// 또는 form 안에 있는 버튼을 눌렀을 때, 이때도 form이 자동으로 submit 됨. (submit 되면 사이트가 새로고침 됨.)
// <form id="login-form">
//     <input required maxlength="15" type="text" placeholder="What is your name?" />
//     <button>Log In</button>  // <input type="submit" value="Log In" /> 와 같은 역할
// </form>
