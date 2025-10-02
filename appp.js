const inputTarea = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("listaTareas");

function agregarTarea() {
    const texto = inputTarea.value.trim();
    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        listaTareas.appendChild(li);
        inputTarea.value = ""; // Limpia el input
    }
}
