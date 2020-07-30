
//declare var
const addBtn = document.querySelectorAll(".addBtn");

//add
for(btn of addBtn){
btn.addEventListener('click',function(){
  addElement();
})}

function addElement(){

  const removeButton = document.createElement("button");
  removeButton.className = "remove";
  removeButton.textContent = "remove";
  
  const completeButton = document.createElement("button");
  completeButton.className = "complete";
  completeButton.textContent = "complete";



  const div = document.getElementById("todoList");
  const newTodo = document.createElement("p");
  const todoValue = document.getElementById("myInput").value;
  newTodo.textContent = todoValue;

  div.appendChild(newTodo);
  newTodo.appendChild(removeButton);
  newTodo.appendChild(completeButton);
}

//remove. complete

todoList.addEventListener("click", function(event) {
  const targetTagClassName = event.target.className;
  if (targetTagClassName === "complete") {
    event.target.parentNode.style.textDecoration = "line-through";
  } else if (targetTagClassName === "remove") {
    event.target.parentNode.remove();
  }
})


//local Storage

const todoList = document.getElementById("todoList");
localStorage.setItem("todo", JSON.stringify(todoList));
