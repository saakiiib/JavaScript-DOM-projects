document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  const taskInput = document.getElementById("task");
  const taskTimeInput = document.getElementById("task-time");
  const taskList = document.getElementById("task-list");

  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    const taskTime = taskTimeInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      const taskLabel = document.createElement("span");
      taskLabel.textContent = taskText;
      const taskTimeLabel = document.createElement("span");
      taskTimeLabel.textContent = taskTime;
      taskTimeLabel.classList.add("task-time");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");

      li.appendChild(taskLabel);
      li.appendChild(taskTimeLabel);
      li.appendChild(deleteButton);
      taskList.appendChild(li);

      taskInput.value = "";
      taskTimeInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      const listItem = event.target.parentElement;
      taskList.removeChild(listItem);
    } else if (event.target.tagName === "SPAN") {
      event.target.classList.toggle("complete");
    }
  });
});
