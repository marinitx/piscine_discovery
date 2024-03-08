$(document).ready(function(){
    $("#newButton").click(function(){
        let task = prompt("¿Qué tienes que hacer?");
        if (task !== null && task.trim() !== "") {
            let newTaskDiv = $("<div>").text(task);
            newTaskDiv.click(deleteTask);
            $(".tarjeta").prepend(newTaskDiv);
        }
    });
});

function deleteTask() {
    if (confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
        $(this).remove();
    }
}