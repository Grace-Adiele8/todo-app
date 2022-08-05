// selector

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("filter-todo");

document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);
filterOption.addEventListener("click", filtertodo); 

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
  savelocalstorage(todoInput.value);

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
        removelocalTodos();
        todo.addEventListener('transitionend', function(){
        todo.remove();
        });
        
    }

    if(item.classList[0] === 'completed-btn') {
        const todo =item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(event) {
     const todos = todoList.childNodes;
     console.log(todos);
     todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display ='flex';    
            break;
            case "completed":
            if (todo.classList.contains('completed')){
              todo.style.display ='flex';
            }else{
                todo.style.display ='none'; 
            }
            break;
            case "uncompleted":
            if (todo.classList.contains("completed")){
              todo.style.display ='none';
            }else{
                todo.style.display ='flex'; 
            }
            break;
        }
          
     })
}
function savelocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos= [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.getItem("todos" , JSON.stringify(todos));
}
function getTodos(){
    let todos
    
    if(localStorage.getItem('todos') === null){
        todos= [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){})
}
function removelocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos= [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    
}


