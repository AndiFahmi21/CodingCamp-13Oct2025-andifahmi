function addTask() {
     const taskInput =
}

function renderTasks() {
     const tasklist = document.getElemenetby
}

function deleteAllTasks() {
     taskDb = [];
     renderTasks();
}

function filterTasks() {}

function ValidateInput(task, date) {
     if (task.trim() === '' || date.trim() === '') {
          alert('Please enter both task and due date.');
          return false;
     }
     return true;
}