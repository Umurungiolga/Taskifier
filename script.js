// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Get the task input value
    var taskText = taskInput.value.trim();

    // If the input is not empty, create a new list item
    if (taskText !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Add event listener to mark task as completed
        listItem.addEventListener("click", function() {
            this.classList.toggle("completed");
        });

        // Add event listener to remove task when double-clicked
        listItem.addEventListener("dblclick", function() {
            this.remove();
        });

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }
}