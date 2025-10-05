// Wait for the HTML document to be fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get trimmed task input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create new list item and remove button
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Event to remove task when remove button clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append remove button to the list item and list item to the task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Attach event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: Call addTask on DOMContentLoaded if needed
  addTask();
});
