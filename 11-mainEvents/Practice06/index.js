const list = document.getElementById("list");
const form = document.forms.addTask;

form.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();
    const task = document.createElement("li");
    task.textContent = form.newTask.value;
    list.appendChild(task);
}
