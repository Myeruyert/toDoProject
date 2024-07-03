// DOM ELEMEMTS
const taskTodoList = document.getElementById("taskTodoList");
const taskProgressList = document.getElementById("taskProgressList");
const taskDoneList = document.getElementById("taskDoneList");
const taskBlockedList = document.getElementById("taskBlockedList");
const addTaskBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("save-btn");
const taskInput = document.getElementById("task-input");
const taskStatus = document.getElementById("status");
const tooluurTodo = document.getElementsByClassName("tooluur")[0];
const tooluurIp = document.getElementsByClassName("tooluur-2")[0];
const tooluurDone = document.getElementsByClassName("tooluur-3")[0];
const tooluurBlocked = document.getElementsByClassName("tooluur-4")[0];

// VARIABLES FOR TASK
let isEdited = false;
let editedIndex = -1;

const tasks = [
  // {
  //   name: "Task One",
  //   status: "TODO",
  // },
];

function zurah() {
  taskTodoList.innerHTML = "";
  taskProgressList.innerHTML = "";
  taskDoneList.innerHTML = "";
  taskBlockedList.innerHTML = "";
  let countTodo = 0;
  let countIP = 0;
  let countDone = 0;
  let countBlocked = 0;

  for (let i = 0; i < tasks.length; i++) {
    console.log("i", i);
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center border border-1 bg-dark text-white-50 my-2 rounded p-2 ${statusColor(
      tasks[i].status
    )}"}>
      <span>${tasks[i].name} - ${i}</span>
      <div>
        <button class="btn"           
          data-bs-toggle="modal"
          data-bs-target="#taskModal" 
          onclick={editTask(${i})}>
          <i class="bi bi-pencil text-white"></i>
        </button>
        <button class="btn" onclick={deleteTask(${i})}>
        <i class="bi bi-trash text-danger"></i>
        </button>
      </div>
    </div>
 `;

    switch (tasks[i].status) {
      case "TODO": {
        taskTodoList.innerHTML += newTaskCard;
        countTodo++;
        break;
      }
      case "INPROGRESS": {
        taskProgressList.innerHTML += newTaskCard;
        countIP++;
        break;
      }
      case "DONE": {
        taskDoneList.innerHTML += newTaskCard;
        countDone++;
        break;
      }
      case "BLOCKED": {
        taskBlockedList.innerHTML += newTaskCard;
        countBlocked++;
        break;
      }
      default: {
        console.log("ALDAA GARLAA");
      }
    }

    function statusColor(status) {
      switch (status) {
        case "TODO": {
          return "border-white";
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
  tooluurTodo.innerHTML = countTodo;
  tooluurIp.textContent = countIP;
  tooluurDone.textContent = countDone;
  tooluurBlocked.textContent = countBlocked;
}
zurah();

saveBtn.addEventListener("click", function () {
  if (isEdited) {
    tasks[editedIndex].name = taskInput.value;
    tasks[editedIndex].status = taskStatus.value;
    isEdited = false;
  } else {
    const newTask = {
      name: taskInput.value,
      status: taskStatus.value,
    };
    tasks.push(newTask);

    zurah();
    console.log("TASKS", tasks);
  }
  taskInput.value = "";
  taskStatus.value = "TODO";
  zurah();
});

function editTask(taskIndex) {
  console.log("edit", taskIndex);
  taskInput.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;
  isEdited = true;
  editedIndex = taskIndex;
}

function deleteTask(taskIndex) {
  console.log("ti", taskIndex);
  tasks.splice(taskIndex, 1);
  zurah();
}
