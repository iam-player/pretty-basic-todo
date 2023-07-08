let input = document.getElementById("input");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let removeAll = document.getElementById("removeAll");
let modal = document.getElementById("modal"); 
let modalConfirm = document.getElementById("modalConfirm");
let modalCancel = document.getElementById("modalCancel");
let tasksList = document.getElementById("list");
let emptyTaskList = document.getElementById("emptyTaskList");

input.focus();

const addTaskToList = input => {
    tasksList.value = "";
    tasksList.innerHTML += '<div class="task__container"><li>'+input+'</li><span>x</span></div>';
};

const saveTasksToLocal = () => {
    localStorage.setItem("tasks-data", tasksList.innerHTML);
}

const loadTasksFromLocal = () => {
    tasksList.innerHTML = localStorage.getItem("tasks-data");
    if(!tasksList.children.length){
        emptyTaskList.classList.add('show');
    } else {
        emptyTaskList.classList.remove('show');
    }
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
        loadTasksFromLocal();
    } else {
        input.classList.add("error");
        input.classList.add("bounce");
        setTimeout(function(){
            input.classList.remove("bounce");
        }, 2000);
    }
});

with (input){
    input.classList.remove("error");
    onblur = function(e) {
        let elem = e.target;
        setTimeout(function(){
            elem.focus()
        });
    }
    onkeydown = function(e) {
        let key = e.which || e.keyCode;
        if (key == 9) e.preventDefault();
    }
};

tasksList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasksToLocal();
        loadTasksFromLocal();
    }
});

removeAll.addEventListener("click", () =>{
    modal.classList.add('show');
});

modalConfirm.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.classList.remove('show');
    removeAllgiFromLocal();
    loadTasksFromLocal();
});

modalCancel.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.classList.remove('show');
});