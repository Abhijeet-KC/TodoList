let todos = ['write code', 'stay focussed', 'believe in yourself'];
todos.push('keep learning');

todos.forEach(function addTodo(todoTitle) {

    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);

})

function addTodo(todoTitle) {

    let todo_in = document.getElementById('todo');
    let text = todo_in.value;
    todos.push(text);
    let element = document.createElement('div');
    element.innerText = text;
    document.body.appendChild(element);

}

