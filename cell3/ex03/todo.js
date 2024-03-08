function addTask() {
    let task = prompt("¿Qué tienes que hacer?");
    
    if (task !== null && task.trim() !== "") {
        let newTaskDiv = document.createElement("div");
        newTaskDiv.textContent = task;
        newTaskDiv.addEventListener("click", deleteTask);
        let ftList = document.getElementById("ft_list");
        ftList.insertBefore(newTaskDiv, ftList.firstChild);
    }
}

function deleteTask(event) {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
        event.target.remove();
    }
}
