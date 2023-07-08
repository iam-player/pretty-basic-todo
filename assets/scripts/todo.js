let input = document.getElementById("input");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let removeAll = document.getElementById("removeAll");
let modal = document.getElementById("modal"); 
let modalConfirm = document.getElementById("modalConfirm");
let modalCancel = document.getElementById("modalCancel");
let tasksList = document.getElementById("list");
tasksList.innerHTML += "<p>You haven't added any tasks yet.</p>";
let tasks = [];

const addTaskToList = input => {
    tasksList.value = "";
    tasksList.innerHTML += '<div class="task__container"><li>'+input+'</li><span>x</span></div>';
};

const saveTasksToLocal = () => {
    localStorage.setItem("tasks-data", tasksList.innerHTML);
}

const loadTasksFromLocal = () => {
    tasksList.innerHTML = localStorage.getItem("tasks-data");
}

const removeAllFromLocal = () =>{
    localStorage.clear();
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
        saveTasksToLocal();
    }
});

removeAll.addEventListener("click", () =>{
    //show modal with option buttons
    modal.classList.add('show');
});

modalConfirm.addEventListener("click", (e) =>{
    //prevent subbmiting of a dialog form
    e.preventDefault();

    //hide modal, remove class
    modal.classList.remove('show');

    //remove local storage => reload
    removeAllFromLocal();
    location.reload();
});

modalCancel.addEventListener("click", (e) =>{
    //prevent subbmiting of a dialog form
    e.preventDefault();

    //hide modal, remove class
    modal.classList.remove('show');
});