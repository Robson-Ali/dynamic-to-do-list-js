// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    
  // Step 2: Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
  // Load tasks from Local Storage when page loads
  loadTasks();
  
  // Step 3: Create the addTask Function
  function addTask(taskText, save = true) {
      // If taskText is not provided, get it from input
      if (typeof taskText !== 'string') {
          taskText = taskInput.value.trim();
      }
      
      // Check if taskText is empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }
      
      // Step 4: Task Creation and Removal
      // Create new li element and set its text content
      const li = document.createElement('li');
      li.textContent = taskText;
      
      // Create remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = "Remove";
      removeBtn.classList.add('remove-btn');
      
      // Assign onclick event to remove button
      removeBtn.onclick = function() {
          taskList.removeChild(li);
          // Remove from Local Storage
          removeTaskFromStorage(taskText);
      };
      
      // Append remove button to li, then li to taskList
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      
      // Clear the input field only if adding from input
      if (save) {
          taskInput.value = "";
      }
      
      // Save to Local Storage if save is true
      if (save) {
          saveTaskToStorage(taskText);
      }
  }
  
  // Function to load tasks from Local Storage
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false));
  }
  
  // Function to save task to Local Storage
  function saveTaskToStorage(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
  
  // Function to remove task from Local Storage
  function removeTaskFromStorage(taskText) {
      let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
  
  // Step 5: Attach Event Listeners
  // Add click event listener to Add Task button
  addButton.addEventListener('click', function() {
      addTask();
  });
  
  // Add keypress event listener to input field for Enter key
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});
