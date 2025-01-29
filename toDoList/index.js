const tasks = document.querySelector(".tasks");
const completedTasks = document.getElementById("completedTasks");

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

function completeLine() {
  const textInputs = document.querySelectorAll('input[type="text"]');
  textInputs.forEach((item) => {
    let taskInput = item.value;
    let newInput = document.createElement("li");
    newInput.textContent = taskInput;
    completedTasks.appendChild(newInput);
  });
}

function editLine() {
  const pendingLine = document.querySelectorAll("li");
  pendingLine.forEach((line) => {
		addLine(line.textContent)
  });
}
