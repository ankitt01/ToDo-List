const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList =  document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(e) {
  e.preventDefault();
  //Create a div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo); //add li to div
  //checkmark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  //trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv); //adding div to list
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete item
  if(item.classList[0] === 'trash-btn') {
    item.parentElement.classList.add('fall');
    item.parentElement.addEventListener('transitionend', function() {
      item.parentElement.remove();
    });
  }
  //Check item
  if(item.classList[0] === 'complete-btn') {
    item.parentElement.classList.toggle('completed');
  }
}