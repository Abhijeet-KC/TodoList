const todos = [{
    title: 'write code',
    due_date: '2024-01-30'
},{
    title: 'stay focussed',
    due_date: '2024-02-30'
},{
    title: 'believe in yourself',
    due_date: '2024-03-30'
}]
todos.push({
    title: 'keep learning',
    due_date: '2024-04-30'
});

render();
function render() {
    // clear the list
    document.getElementById('todos-list').innerHTML = '';

    todos.forEach(function (todo) {
        const element = document.createElement('div');
        element.innerText = todo.title + ' | ' + todo.due_date;
        const todolist = document.getElementById('todos-list');
        todolist.appendChild(element);
    });
}

function addTodo() {

    const text_input = document.getElementById('todo');
    const text = text_input.value;

    const datePicker = document.getElementById('DatePicker');
    const due_date = datePicker.value;

    todos.push(
        {
            title: text,
            due_date: due_date
        }
    );
    
    render();

}



