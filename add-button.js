document.querySelector('.add-todo').addEventListener('click', () => {
    addTodo();
    refreshTodos(currentTodos);
})