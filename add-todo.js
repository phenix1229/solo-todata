
// A function that adds an item to our todo list.
const addTodo = function(todo) {
  const inputText = document.querySelector('input').value
  // let todo = inputText
  let obj = {
    text:inputText,
    id:todo,
    complete:false,
    priority:1,
  }
  
  todos.push(obj)
  clearTodos()
  // namesAndPriorities(todos)
  printTodos(todos) 
}

// const userInput = document.querySelector('input');
// document.querySelector('.add-todo').addEventListener('click', () => printTodo(userInput));
// const sortChoice = document.querySelector('.sort');
// document.querySelector('.sort-todo').addEventListener('click', (sortChoice) => {
//   let currentTodos = [];
//   if (sortChoice.value === 1){
//     todos.forEach(todo => todo[complete] === true ? currentTodos.push(todo) : currentTodos.unshift(todo));
//   }
//   printTodos(currentTodos)
// })