// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false to avoid duplicate saving
        });
    }

    // Add a task to the list and optionally save to Local Storage
    function addTask(taskText, save = true) {
        if (!taskText) return;

        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for each task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
            updateLocalStorage();
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            updateLocalStorage();
        }
    }

    // Update Local Storage with current tasks in the DOM
    function updateLocalStorage() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            // Get only the task text without the Remove button text
            const taskText = li.firstChild.textContent;
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listener for adding new tasks via button click
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please write something to do!');
            return;
        }
        addTask(taskText);
        taskInput.value = ''; // Clear input box
    });

    // Load tasks on initial page load
    loadTasks();
});
