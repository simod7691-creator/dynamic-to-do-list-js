// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {

    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
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

        // 1. Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText; // Set its textContent to taskText

        // 2. Create a new button element for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";   // Set button text
        removeBtn.className = 'remove-btn'; // Give it the class 'remove-btn'

        // 3. Assign an onclick event to remove the li element from taskList
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // 4. Append the remove button to the li element
        li.appendChild(removeBtn);

        // 5. Append the li element to the taskList
        taskList.appendChild(li);

        // 6. Clear the input field
        taskInput.value = '';
    }

    // === Attach Event Listeners ===

    // 1. Add event listener to addButton to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // 2. Add event listener to taskInput for 'keypress' to allow Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

