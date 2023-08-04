const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#todo-form input") 와 같은 코드
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = []; // const면 고정되므로 let으로 배열을 생성해 업데이트가 가능하도록 함 & 항상 빈 배열로 시작

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; // target: 클릭된 HTML element, parentElement: 클릭된 element의 부모
    // console.log(li.id); // button 을 눌렀을 때의 id -> sting type => parseInt() 를 통해 number type 으로 변환
    li.remove(); // li 변수에 저장된 부분을 삭제해줌.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo: toDos DB 에 있는 요소 중 하나. toDo.id -> number type
    saveToDos(); // 바뀐 array 로 다시 저장
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id; // li 의 id 에 newToDo 의 id 를 할당.
    const span = document.createElement("span");
    span.innerText = newToDo.text; // 입력되는 텍스트를 span 내부에 넣음
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo); // button을 클릭한 후 ToDo를 삭제하기 위한 코드
    li.appendChild(span); // li 하위에 span 추가
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
    toDoInput.value = ""; // 이전의 value를 저장한 후 input 칸을 비워줌
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // array에 저장
    paintToDo(newTodoObj);
    saveToDos(); // 이 단계에서는 storage에만 저장되어 있고 새로고침을 했을 때 화면에 나타나지 않음 & 새로고침 후 다시 value를 입력하면 이전에 storage에 저장된 value가 초기화 된 후 storage에 저장됨. & array로 저장되는 것이 아닌 text로 저장됨
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // localStorage 에 있는 이전의 toDo 들을 지우지 않고 새로운 toDo 를 추가하기 위해
    parsedToDos.forEach(paintToDo);
}

// localStorage에는 text만 저장 가능

// JavaScript object 나 array 또는 JS의 어떤 코드든지 string으로 변환
// const player = { name: "nico" };
// JSON.stringify(player);
// JSON.parse("[1,2,3,4]"); // string을 JS가 이해할 수 있는 실제 array로 만들어줌

// array에 있는 각각의 item에 대한 함수를 실행해줌 ---> 하나의 함수만 가능?
// function sayHello(item) {
//     console.log("this is the turn of", item);
// }
// parsedToDos.forEach(sayHello); // ()안에는 함수를 넣어줌
// 위의 코드를 아래와 같이 쓸 수 있음 (=> : arrow function)
// parsedToDos.forEach((item) => console.log("this is the turn of ", item));

// Date.now(); // ms 를 주는 함수 -> 이를 이용하여 id 생성

// array 에서 원하는 item 을 삭제할 때 그 item을 제외하고 새로운 array 를 생성해야 함
// sexyFilter() 는 true 또는 false 를 return 함. JS 는 함수에서 true 를 return 하는 값만 유지
// function sexyFilter(item) {
//     return item !== 3;
// }

// [1, 2, 3, 4].filter(sexyFilter); // .filter() 는 새로운 array 를 줌. (기존의 array 를 변경하지 않음) & .filter() 는 .forEach() 와 비슷한 동작을 함.
// 위의 코드를 실행하면 array 는 [1, 2, 4] 로 저장됨

// [1, 2, 3, 4].filter((item) => item !== 3); --> 74~78 줄과 똑같은 동작을 함
