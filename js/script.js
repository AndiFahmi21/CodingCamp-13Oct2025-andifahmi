// Database Simulation
let taskDB = [];

// Add Functionality
function addTask() {
     // Create Task Object
     const taskInput = document.getElementbyId('todo-input');
     const taskDate = document.getElementById('todo-date');
     
     if (ValidateInput(taskInput.value, taskDate.value)) {
          const newTask = {
               task: taskInput.value,
               date: taskDate.value,
          }

          // Add to database
          taskDb.push(newTask);

          // Render
          renderTasks();
     }
}

// Render Functionality
function renderTasks() {
     // Clear Existing List
     const tasklist = document.getElementbyId('task-list');
     taskList.innerHTML = '';

     // Check if taskDb is empty
     taskDb.foreach((taskObj, index) => {
          taskList.innerHTML += `<li>${taskObj.date} <button onclick="deleteTask(${index})">Delete</button></li>`
     });
}

// Delete All Functionality
function deleteAllTasks() {
     // Clear Database
     taskDb = [];

     // Render
     renderTasks();
}

// Filter Functionality (placeholder)
function filterTasks() {}

// Input Validation
function ValidateInput(task, date) {
     // Simple Validation
     if (task.trim() === '' || date.trim() === '') {
          alert('Please enter both task and due date.');
          return false;
     }
     return true;
}