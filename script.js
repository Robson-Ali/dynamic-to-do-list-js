document.addEventListener('DOMContentLoaded', () => {
    loadTasks();

    // Assuming there's a form or an input + button to add tasks, e.g.:
    const taskForm = document.getElementById('task-form');
    taskForm.addEventListener('submit', event => {
        event.preventDefault();
        const input = document.getElementById('task-input');
        const taskText = input.value.trim();
        if (taskText) {
            addTask(taskText);
            input.value = '';
        }
    });
});

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}

function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list');

    // Create task list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button and append
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        removeTaskFromLocalStorage(taskText);
    });
    li.appendChild(removeBtn);

    // Append task to list
    taskList.appendChild(li);

    // Save to Local Storage if required
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
