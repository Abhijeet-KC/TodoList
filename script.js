let todos = ['write code', 'stay focussed', 'believe in yourself'];
todos.push('keep learning');

todos.forEach(function addTodo(todoTitle){

let element = document.createElement('div');
element.innerText = todoTitle;
document.body.appendChild(element);

})

function addTodo(todoTitle){

todos.push(todoTitle);
let element = document.createElement('div');
element.innerText = todoTitle;
document.body.appendChild(element);

}

