let input = document.getElementById("input");
let add = document.getElementById("add");
let remove = document.getElementById("remove");

let tasksList = document.getElementById("list");
let tasks = [];


const addTaskToList = input => {
    tasksList.value = "";
    tasksList.innerHTML += '<div class="task__container"><li>'+input+'</li><span>x</span></div>';
    tasks.push(input);
};

const saveTasksToLocal = () => {
    localStorage.setItem("tasks-data", tasksList.innerHTML);
}

const loadTasksFromLocal = () => {
    tasksList.innerHTML = localStorage.getItem("tasks-data");
}

loadTasksFromLocal();

add.addEventListener("click", (e) => {
    e.preventDefault();

    if(!(input.value === "" || input.value === null)){
        addTaskToList(input.value);
        saveTasksToLocal();
        input.value = "";
    } else {
        throw new Error ("User input is empty! Cannot add a task.");
    }
});

tasksList.addEventListener("click", (e) => {

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});
