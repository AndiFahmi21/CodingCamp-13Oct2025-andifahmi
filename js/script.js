// Database Simulation
let taskDb = [];

// Add Functionality
function addTask() {
     // Create Task Object
     const taskInput = document.getElementById('todo-input');
     const taskDate = document.getElementById('todo-date');
     
     // Validation Input
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
     const taskList = document.getElementById('task-list');
     taskList.innerHTML = '';

     // Render Each Task
     taskDb.forEach((taskObj, index) => {
          taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
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
function filterTasks(){}

// Input Validation
function ValidateInput(task, date) {
     // Simple Validation
     if (task.trim() === '' || date.trim() === '') {
          alert('Please enter both task and due date.');
          return false;
     }
     return true;
}