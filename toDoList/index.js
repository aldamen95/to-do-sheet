const tasks = document.querySelector(".tasks");
const completedTasks = document.getElementById("completedTasks");
const todoTasks = document.getElementById("todoTasks");

function addLine(edit) {
  const newLine = document.createElement("div");
  newLine.classList.add("line");
  inputLine = document.createElement("input");
  inputLine.type = "text";
  inputLine.classList.add("inputLine");
  if (edit) {
    inputLine.value = edit;
  }
  newLine.appendChild(inputLine);
  tasks.appendChild(newLine);
}

function removeLine() {
  const lines = document.querySelectorAll(".line");
  tasks.removeChild(lines[lines.length - 1]);
}

function removeComplete() {
  completedTasks.innerHTML = "";
}

function removeToDo() {
  todoTasks.innerHTML = "";
}

function todo() {
  removeToDo();
  const textInputs = document.querySelectorAll('input[type="text"]');
  textInputs.forEach((item) => {
    let taskInput = item.value;
    let newInput = document.createElement("li");
    newInput.textContent = taskInput;
    todoTasks.appendChild(newInput);
  });
  removeAll();
}

function completeLine() {
  removeComplete();
  const textInputs = document.querySelectorAll('input[type="text"]');
  textInputs.forEach((item) => {
    let taskInput = item.value;
    let newInput = document.createElement("li");
    newInput.textContent = taskInput;
    completedTasks.appendChild(newInput);
  });
  removeAll();
}

function editLine() {
  removeAll();

  const parentElement = document.querySelector("ol");
  const editcomplete = parentElement.querySelectorAll("li");
  editcomplete.forEach((line) => {
    addLine(line.textContent);
  });
}

function editToDo() {
  removeAll();

  const parentElement = document.querySelector("ul");
  const editToDo = parentElement.querySelectorAll("li");
  editToDo.forEach((line) => {
    addLine(line.textContent);
  });
}

function removeAll() {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    tasks.removeChild(line);
  });
}
