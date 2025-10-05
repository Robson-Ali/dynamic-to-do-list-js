// Setup event listener for page load to ensure DOM elements are ready before script runs
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    // Retrieve and trim task text from input
    const taskText = taskInput.value.trim();

    // Check if taskText is empty and alert user if so
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Assign onclick event to remove the list item from the task list
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append remove button to list item and list item to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for "Add Task" button click
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key press in task input to add task
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke addTask function once on DOMContentLoaded (optional initialization)
  // (If tasks are to be preloaded or no-op, but following instructions)
  addTask();
});
