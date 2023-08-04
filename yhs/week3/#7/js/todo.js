const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

//const toDos = [];

let toDos = [];

function saveToDos() {
    //   localStorage.setItem("todos", JSON.stringify(toDos));
    //   local storage에 array 저장하기 위해 string화
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    //    console.log(li.id);
    li.remove();
    // toDos = toDos.filter((toDo) => toDo.id !== li.id);
    //li.id는 string, toDo.id는 number이므로 삭제 실패
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //    toDos.push(newTodo);
    //    paintToDo(newTodo);
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
