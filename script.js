// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');  // Input field for tasks
    const taskList = document.getElementById('task-list');    // UL element to display tasks

    // Step 3: Create the addTask Function
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // === Task Creation and Removal ===

        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Assign onclick event to remove the li from the task list
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to the <li>
        li.appendChild(removeBtn);

        // Append <li> to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // === Attach Event Listeners ===

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});


