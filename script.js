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

        // Step 4: Task Creation and Removal
        const li = document.createElement('li'); // Create new list item
        li.textContent = taskText;               // Set text content

        const removeBtn = document.createElement('button'); // Create remove button
        removeBtn.textContent = "Remove";                 // Button text
        removeBtn.className = 'remove-btn';              // Add class

        // Assign onclick event to remove task
        removeBtn.onclick = () => {
            taskList.removeChild(li); // Remove the li from the list
        };

        li.appendChild(removeBtn); // Append remove button to li
        taskList.appendChild(li);  // Append li to task list

        taskInput.value = '';      // Clear input field
    }

    // Step 5: Attach Event Listeners
    addButton.addEventListener('click', addTask); // Add task on button click

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {               // Add task on Enter key
            addTask();
        }
    });

});
