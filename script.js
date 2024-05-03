//Model
let todos = [{
    title: 'write code',
    due_date: '2024-01-30',
    id: 'id1'
},{
    title: 'stay focussed',
    due_date: '2024-02-30',
    id: 'id2'
},{
    title: 'believe in yourself',
    due_date: '2024-03-30',
    id: 'id3'
}]
todos.push({
    title: 'keep learning',
    due_date: '2024-04-30',
    id: 'id4'
});

//creates todo

function createTodo(text, due_date){

    const id = new Date().getTime().toString();   // converting number to string

    // create new todo card only if all filed are filled
    if(text && due_date){ 
        todos.push(
            {
                title: text,
                due_date: due_date,
                id: id
            }
        );
    }
}

//removes todo
function removeTodo(idToDelete){

    todos = todos.filter(function (todo) {
        // return all todos except the one with the id to delete
        return todo.id !== idToDelete;
    });

}

//View
function render() {
    // clear the list
    document.getElementById('todos-list').innerHTML = '';

    todos.forEach(function (todo) {
        const element = document.createElement('div');
        
        const title = document.createElement('p');
        title.innerHTML = todo.title + ' | ' + todo.due_date;
        title.classList.add("todo-title")
        element.appendChild(title)
        element.classList.add("todo-card") // giving class name to element for css 

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add("btn")  // adding class name to button as btn
        deleteButton.style = 'margin-left: 10px';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todolist = document.getElementById('todos-list');
        todolist.appendChild(element);
    });
    const todolist = document.getElementById('todos-list');
    const title = document.createElement('p');
    title.classList.add("no-todo-text")
    title.innerHTML = "No todos "
    if(todos.length == 0){
        todolist.appendChild(title)
    }

}

//Controller
function addTodo() {

    const text_input = document.getElementById('todo');
    const text = text_input.value;

    const datePicker = document.getElementById('DatePicker');
    const due_date = datePicker.value;

    createTodo(text, due_date);    

    render();

}

function deleteTodo(event){
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    removeTodo(idToDelete);

    render();
}

render();
