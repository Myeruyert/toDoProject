//
const outsideBox = document.getElementsByClassName("containerBox")[0];
console.log("outsideBox", outsideBox);

const taskBox = document.getElementsByClassName("box")[0];
console.log("taskBox", taskBox);

const addTask = document.getElementsByClassName("add")[0];
console.log("add", addTask);

const insertTask = document.getElementsByClassName("taskAdder")[0];

const main = document.getElementsByClassName("main")[0];

const submit = document.getElementsByClassName("submit")[0];

const toDoListEl = document.getElementsByClassName("taskToDoList")[0];
//

// taskBox = document.createElement("div");
// taskBox.className = "box col bg-black border border-secondary rounded p-sm-3";
// outsideBox.appendChild(taskBox);

//EVENTLISTENER
addTask.addEventListener("click", () => {
  insertTask.classList.toggle("display");
  main.classList.toggle("transparented");
});

toDoListEl.innerHTML = `
    <div class="task rounded bg-dark d-flex align-items-center gap-2 p-sm-3 my-2">
        <button class="checkbox text-white-50 bg-transparent border-0">
            <i class="fa-regular fa-circle fs-6"></i>
        </button>
            <span class="text-white-50"
                >[Loan management]- Add a card component</span
                >
        <button class="edit text-white-50 bg-transparent border-0 fs-6">
            <i class="fa-solid fa-pencil"></i>
        </button>
        <button class="delete text-danger bg-transparent border-0 fs-6">
            <i class="fa-regular fa-trash-can"></i>
        </button>
    </div>
`;
