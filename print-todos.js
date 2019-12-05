const printTodos = function(todos) {
  console.log(todos)
  for (const todo of todos) {
    printTodo(todo);
  }
}

printTodos(todos);