document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create li element and set text
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove";
  removeBtn.className = 'remove-btn';

  // Remove task on click
  removeBtn.onclick = () => {
    taskList.removeChild(li);
  };

  // Append remove button and li to list
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Attach event listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Invoke addTask on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  addTask();
});
}
