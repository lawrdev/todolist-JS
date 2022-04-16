// Add todos form
const addForm = document.querySelector('.add');
// text input for new todo
const newTodo = document.querySelector('.add input');
// Todo list
const todoList = document.querySelector('ul.todos');

// create new todo
const generateTemplate = todo =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="text-light">${todo}</span>
            <i class="delete text-light fa-solid fa-trash-can"></i>
        </li>
    `;
    todoList.innerHTML += html;
};
addForm.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = newTodo.value.trim().toLowerCase();
    generateTemplate(todo);
    addForm.reset();
});

// delete todos
todoList.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// search and filter todos
const searchForm = document.querySelector('.search');
const search = document.querySelector('.search input');

searchForm.addEventListener('submit', e =>{
    e.preventDefault();
});
const filteredTodo = item => {
    // console.log(Array.from(todoList.children));
    Array.from(todoList.children)
        .filter(eachTodo => ! eachTodo.textContent.toLowerCase().includes(item))
        .forEach(eachTodo => eachTodo.classList.add('hidden'));

    Array.from(todoList.children)
        .filter(eachTodo => eachTodo.textContent.toLowerCase().includes(item))
        .forEach(eachTodo => eachTodo.classList.remove('hidden'));
};
search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filteredTodo(term);
});


