const clearTodos = function() {
  const list = document.querySelector('.todo-list');
  while(list.hasChildNodes()) {
    list.firstChild.remove();
  }
}

const clearCurrentTodos = function() {
  while(currentTodos.length > 0) {
    currentTodos.pop();
  }
}