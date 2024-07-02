// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");

// VARIABLES FOR TASK
const tasks = [
  {
    name: "Task Two",
    status: "INPROGRESS",
    border: "YELLOW",
  },
  {
    name: "Task Three",
    status: "BLOCKED",
  },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    console.log("i", i);
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 rounded p-2 ${statusColor(
      tasks[i].status
    )}"}>
    <span>${tasks[i].name} - ${i}</span>
    <div>
        <button class="btn" onclick={editTask()}>
        <i class="bi bi-pencil"></i>
        </button>
        <button class="btn" onclick={deleteTask(${i})}>
        <i class="bi bi-trash"></i>
        </button>
    </div>
    </div>
 `;
    console.log("n0", newTaskCard);

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;

        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }

    function statusColor(status) {
      switch (status) {
        case "TODO": {
          return "border-black";
        }
        case "INPROGRESS": {
          return "border-warning";
        }
        case "DONE": {
          return "border-success";
        }
        case "BLOCKED": {
          return "border-danger";
        }
        default: {
          console.log("ALDAA GARLAA");
        }
      }
    }
  }
}

saveBtn.addEventListener("click", function () {
  const newTask = {
    name: taskInput.value,
    status: taskStatus.value,
  };
  tasks.push(newTask);
  zurah();
  console.log("TASKS", tasks);
});

zurah();

function editTask() {
  console.log("edit");
}

function deleteTask(taskIndex) {
  console.log("ti", taskIndex);
  tasks.splice(taskIndex, 1);
  zurah();
}
