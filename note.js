
const todoInput = document.querySelector(".input-line");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteItem);


function addTodo(event){
	event.preventDefault();

	if(todoInput.value === ''){
		alert("Fill in the line");
	}
	else{

	const todoDiv = document.createElement('div');
	todoDiv.classList.add("todo");

	const completedButton = document.createElement('button');
	completedButton.innerHTML ='Marked';
	completedButton.classList.add("complete-button");
	todoDiv.appendChild(completedButton);
	
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	 
	const trashButton = document.createElement('button');
	trashButton.innerHTML ='Delete';
	trashButton.classList.add("trash-button");
	todoDiv.appendChild(trashButton);

	todoList.appendChild(todoDiv);
	todoInput.value ="";
	
	}
}

function deleteItem(e){
	const item = e.target;
	if(item.classList[0] === "complete-button"){
		const todo =  item.parentElement;
		todo.classList.toggle("completed");
		todo.style.textDecoration = "line-through";
	}
	if(item.classList[0] === "trash-button"){
		const todo = item.parentElement;
		todo.remove();
	}

}