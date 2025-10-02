const taskList = document.getElementById("task-list");

function setupDeleteTaskHandler() {
  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      const taskItem = event.target.parentElement;
      taskItem.remove();
    }
  });
}

setupDeleteTaskHandler();
