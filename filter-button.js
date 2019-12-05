const filterOption = document.querySelector('.filter');

document.querySelector('.filter-todo').addEventListener('click', () => {
    if (filterOption === 1){
        printTodos(todos);
    } else if (filterOption === 2){
        const currentTodos = [];
        todos.forEach(todo => {
            if (todo.complete === false){
                currentTodos.push(todo);
            }
        })
        printTodos(currentTodos)
    }
}
)