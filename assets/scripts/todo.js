let input = document.getElementById("input");
let add = document.getElementById("add");

let tasksList = document.getElementById("list");
let tasks = [];

const addTaskToList = input => {
    tasksList.value = "";
    tasksList.innerHTML += '<li>'+input+'</li>';
    tasks.push(input);
    console.log(tasks);
};

add.addEventListener("click", (e) => {
    e.preventDefault();

    if(!(input.value === "" || input.value === null)){
        addTaskToList(input.value);
    } else {
        throw new Error ("User input is empty! Cannot add a task.");
    }
});
