const filterOption = document.querySelector('.filter');

document.querySelector('.filter-todo').addEventListener('click', () => {
    if (filterOption.value === 1){
        printTodos(todos);
    } else if (filterOption.value === '2'){
        clearCurrentTodos();
        // todos.forEach(todo => {
        //     if (todo.complete === false){
        //         currentTodos.push(todo);
        //     }
        // })
        printTodos(currentTodos)
    }
}
)