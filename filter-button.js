const filterOption = document.querySelector('.filter');

document.querySelector('.filter-todo').addEventListener('click', () => {
    // clearTodos();
    if (filterOption.value === 1){
        currentTodos = [...todos]
        refreshTodos();
    } else if (filterOption.value === 2){
        while (currentTodos.length > 0){
            currentTodos.pop();
        }
        document.querySelector('li').forEach(todo => {
            if (!todo.classList.includes('complete')){
                currentTodos.push(todo);
            }
        })
        refreshTodos();
        // printTodos(currentTodos)
    }
}
)