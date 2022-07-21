// selector

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("Div");
  todoDiv.classList.add("todo");
  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  todoDiv.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completedbutton = document.createElement("button");
  completedbutton.innerHTML = ' <i class= "fas fa-check"></i>';
  completedbutton.classList.add("completed-btn");

  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = ' <i class= "fas fa-trash"></i>';
  trashbutton.classList.add("trash-btn");

  todoList.appendChild(todoDiv);
}
