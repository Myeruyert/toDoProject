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
let isEdited = false;
let editedIndex = -1;
const tasks = [
  {
    name: "Task one",
    status: "INPROGRESS",
  },
  {
    name: "Task two",
    status: "BLOCKED",
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

  "Hello" + "World";
  5 + 5;
  const a = 100;
  // Welcome - 100 - city - 100 - "world"
  "Welcome - " + a + " - city - " + a + '"world"';
  `Welcome 
  - ${a} - city - 100 - "world"`;

  for (let i = 0; i < tasks.length; i++) {
    console.log("TASKS", tasks);
    const newTaskCard = `
    <div class="d-flex justify-content-between align-items-center rounded p-2 bg-dark text-white mb-3 ">
    <span class="text-seconary">${tasks[i].name}</span>
    <div>
        <button class="btn"  data-bs-toggle="modal" data-bs-target="#taskModal" onclick="taskEdit(${i})">
        <i class="bi bi-pencil text-secondary"></i>
        </button>
        <button class="btn">
        <i class="bi bi-trash text-danger" onclick="deleteTask(${i})"></i>
        </button>
    </div>
    </div>
 `;

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
  }
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
  }
  taskInput.value = "";
  taskStatus.value = "TODO";
  zurah();
});

const deleteTask = (taskIndex) => {
  tasks.splice(taskIndex, 1);
  zurah();
};

const taskEdit = (taskIndex) => {
  console.log(taskIndex);
  taskInput.value = tasks[taskIndex].name;
  taskStatus.value = tasks[taskIndex].status;

  isEdited = true;
  editedIndex = taskIndex;
};

// const list = document.querySelectorAll(".item");

// console.log(list);

// list.forEach((s) => {
//   console.log("o", s);
// });
