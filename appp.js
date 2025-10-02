function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let tareaTexto = input.value.trim();

    if (tareaTexto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = tareaTexto;

    document.getElementById("listaTareas").appendChild(li);

    input.value = "";
}