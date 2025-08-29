// Part 1: Variables + conditionals
let tasks = [];
let message = "Welcome to my project!";
if (tasks.length === 0) {
    console.log(message + " You currently have no tasks.");
}

// Part 2: Two custom functions
function addNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("calcResult").textContent = "Sum: " + result;
}

function multiplyNumbers() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("calcResult").textContent = "Product: " + result;
}

// Part 3: Loops
function showTasks() {
    let list = document.getElementById("todoList");
    list.innerHTML = ""; // clear first

    // Example of for loop
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];
        list.appendChild(li);
    }

    // Example of forEach loop
    tasks.forEach((task, index) => {
        console.log("Task " + (index + 1) + ": " + task);
    });
}

// Part 4: DOM interactions
function addTask() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task !== "") {
        tasks.push(task);
        input.value = "";
        showTasks(); // refresh the list
    } else {
        alert("Please enter a task!");
    }
}
