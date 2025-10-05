document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();

   function addTask() {
  if (taskText !== "") {
    // Create new list item and set text
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove li on button click
    removeBtn.onclick = function() {
      li.remove();
    };

    // Append remove button to li
    li.appendChild(removeBtn);

    // Append li to task list
    taskList.appendChild(li);

    // Clear task input
    taskInput.value = "";
  }
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
