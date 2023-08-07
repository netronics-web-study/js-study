const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // date.getHours()는 number, padStart()를 사용하기 위해서는 string이어야 함.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 새로고침을 했을 때 바로 호출함.
setInterval(getClock, 1000); // 매초마다 함수 호출.

// function sayHello() {
//     console.log("hello");
// }

// Interval: 매번 일어나야 하는 무언가를 의미함. 아래의 코드로 interval 설정.
// setInterval(function, time)에서 time의 단위는 [ms]. time만큼 시간이 지나면 function 실행.
// setInterval(sayHello, 5000);

// setTimeout(sayHello, 5000); // time 만큼 시간이 지난 후 function 한 번 실행.

// const date = new Date(); // 현재 날짜, 시각을 표시.
// date.getDate(); // 년, 월, 일 중 '일'을 표시.
// date.getDay(); // 일요일부터 0으로 시작. 요일 표시.
// date.getFullYear(); // 년, 월, 일 중 '년'을 표시.
// date.getHours(); // 현재 시각 중 '시'를 표시.
// date.getMinutes(); // 현재 시각 중 '분'을 표시
// date.getSeconds(); // 현재 시각 중 '초'를 표시.

// "1".padStart(2,"0") // string의 길이가 2 미만이면 string의 앞에 0을 추가.
// "1".padEnd(2, "0"); // string의 길이가 2 미만이면 string의 뒤에 0을 추가.
