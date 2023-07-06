let input = document.getElementById("input");
let add = document.getElementById("add");
let remove = document.getElementById("remove");

let tasksList = document.getElementById("list");
let tasks = [];

const addTaskToList = input => {
    tasksList.value = "";
    tasksList.innerHTML += '<li>'+input+'<span>X</span></li>';
    tasks.push(input);
};

add.addEventListener("click", (e) => {
    e.preventDefault();

    if(!(input.value === "" || input.value === null)){
        addTaskToList(input.value);
    } else {
        throw new Error ("User input is empty! Cannot add a task.");
    }
});

tasksList.addEventListener("click", (e) => {
    e.preventDefault();

    if(e.target.tagName === "LI"){
        console.log("li");
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        console.log("removing");
    }
    
});