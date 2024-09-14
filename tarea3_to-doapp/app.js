document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("You can't add an empty task");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");

    taskItem.innerHTML = `
        ${taskText}
        <div class="task-buttons">
            <button class="complete-btn" onclick="completeTask(this)">✔</button>
            <button class="delete-btn" onclick="deleteTask(this)">✖</button>
        </div>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function completeTask(button) {
    const taskItem = button.closest("li");
    taskItem.classList.toggle("completed");
}

function deleteTask(button) {
    const taskItem = button.closest("li");
    taskItem.remove();
}
