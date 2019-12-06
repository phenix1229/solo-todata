
// A function that adds an item to our todo list.
const addTodo = function() {
  const inputText = document.querySelector('input')
  if (inputText.value !== ''){
    let obj = {
      text: inputText.value,
      id: todos.length,
      complete: false,
      priority: document.querySelector('.priority').value,
    }
    
    todos.push(obj);
    currentTodos.push(obj);
    inputText.value = ''
  }
}