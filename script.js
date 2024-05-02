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

render();
function render() {
    // clear the list
    document.getElementById('todos-list').innerHTML = '';

    todos.forEach(function (todo) {
        const element = document.createElement('div');
        element.innerText = todo.title + ' | ' + todo.due_date;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 10px';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todolist = document.getElementById('todos-list');
        todolist.appendChild(element);
    });
}

function addTodo() {

    const text_input = document.getElementById('todo');
    const text = text_input.value;

    const datePicker = document.getElementById('DatePicker');
    const due_date = datePicker.value;

    const id = '' + new Date().getTime();

    todos.push(
        {
            title: text,
            due_date: due_date,
            id: id
        }
    );

    render();

}

function deleteTodo(event){
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    todos = todos.filter(function (todo) {
        // return all todos except the one with the id to delete
        return todo.id !== idToDelete;
    });
    render();
}



