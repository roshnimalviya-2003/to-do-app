// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        // Create new task element
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Remove</button>`;
        
        // Add the new task to the list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentNode;
    
    // Remove the task from the list
    taskList.removeChild(taskItem);
}
