// selector

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("Div");
  todoDiv.classList.add("todo"); 
  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  todoDiv.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const completedbutton = document.createElement("button");
  completedbutton.innerHTML = ' <i class="fas fa-check"></i>';
  completedbutton.classList.add("completed-btn");

  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = ' <i class= "fas fa-trash"></i>';
  trashbutton.classList.add("trash-btn");

  todoDiv.appendChild(completedbutton);

  todoDiv.appendChild(trashbutton);

  todoList.appendChild(todoDiv);
  
  todoInput.value = "";
}

function deletecheck(event) {
    const item = event.target;
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
        todo.remove();
        });
        
    }

    if(item.classList[0] === 'completed-btn') {
        const todo =item.parentElement;
        todo.classList.toggle("completed");
    }
}


