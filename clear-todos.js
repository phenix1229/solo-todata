const clearTodos = function() {
  const list = document.querySelector('.todo-list');
  while(list.hasChildNodes()) {
    list.firstChild.remove();
  }
}

// const filterTodoButton =document.querySelector('.filter-todo')
// const list = document.querySelectorAll('li')
// const newList = []
// newList.push(list)

// filterTodoButton.addEventListener('click', newList.filter((todos)=> justComplete(todos)))
