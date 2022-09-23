const setAndGetItem = () => {
    const inputText = document.getElementById('todo-text');
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    console.log(todos);
    if (!todos){
        const todolist = [{title : inputText.value, status: 'Not done'}];
        localStorage.setItem('TODOS', JSON.stringify(todolist));
    }  else{
        const todolist = [...todos, {title : inputText.value, status: 'Not done'}];
        localStorage.setItem('TODOS', JSON.stringify(todolist));
    } 
    inputText.value = "";
    render();
};

const render = () => {
    const getElement = JSON.parse(localStorage.getItem('TODOS'));
    const todoUl = document.getElementById('todo-list');
    todoUl.innerHTML = "";
    getElement?.forEach(todo => {
        const todoLi = document.createElement('li');
        todoLi.classList.add('w-full', 'flex', 'justify-between');
        todoLi.innerHTML =`
            <p>${todo.title}</p>
            <button title="Clear All" class="">
                <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
            </button>
        `;
        todoUl.appendChild(todoLi);
    });
}
const removeStorage = () => {
    localStorage.removeItem('TODOS');
    render();
}

// render();