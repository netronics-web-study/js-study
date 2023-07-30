// const hellos = document.getElementsByClassName("Hello"); // className으로 element 가져오기

// console.log(hellos); // array로 가져옴

// const title = document.getElementsByTagName("h1");   // h1에 있는 element 가져옴

// console.log(title);

//querySelector는 CSS selector 자체를 전달
// const title = document.querySelector(".hello h1"); // element를 CSS 방식으로 검색 가능, CSS selector를 사용하여 class hello를 찾고, 그 안에 있는 h1 가져오기

// 아래 두 코드는 같은 동작을 함
// const title = document.querySelector("#hello form"); // id를 이용하여 가져옴, 하위 부분 가져올 수 있음
// const title = document.getElementById("hello");  // id의 하위 부분을 가져 오지 못함

// console.log(title); // 여러 개 존재할 경우 첫번째 것만 가져옴

// selector 안의 조건에 부합하는 모든 element 가져오기
// const title = document.querySelectorAll(".hello h1");

// console.log(title); // array로 반환

const title = document.querySelector(".hello h1");

title.innerText = "Hello";
