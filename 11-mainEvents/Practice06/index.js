const list = document.getElementById("list");
const form = document.forms.addTask;

form.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();
    const task = document.createElement("li");
    task.textContent = form.newTask.value;
    list.appendChild(task);
    form.newTask.value = "";
    form.newTask.focus();
}

list.addEventListener("click", strikeTask);

/* function strikeTask(e) {
    //alert(e.target.textContent);
    e.target.classList.toggle("complete");
}
 */

function strikeTask(e) {
    e.target.remove();
    //  e.target.parentNode.removeChild(e.target);
}
