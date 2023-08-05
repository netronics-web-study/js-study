const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];
const savedTodos = localStorage.getItem(TODOS_KEY);

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodoObj.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.srcElement.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
  li.remove();
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

todoForm.addEventListener("submit", handleToDoSubmit);

if (saveTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}
