const todos = ['write code', 'stay focussed', 'believe in yourself'];
todos.push('keep learning');

render();
function render() {
    // clear the list
    document.getElementById('todos-list').innerHTML = '';

    todos.forEach(function (todoTitle) {
        const element = document.createElement('div');
        element.innerText = todoTitle;
        const todolist = document.getElementById('todos-list');
        todolist.appendChild(element);
    });
}

function addTodo() {

    const text_input = document.getElementById('todo');
    const text = text_input.value;
    todos.push(text);
    render();

}



