const inputTarea = document.getElementById("nuevaTarea");  // descripción
const listaTareas = document.getElementById("listaTareas");
const inputTareanm = document.getElementById("nombre");   // nombre
const inputTareacr = document.getElementById("categoria"); // categoría

function agregarTarea() {
    const nombre = inputTareanm.value.trim();
    const descripcion = inputTarea.value.trim();
    const categoria = inputTareacr.value;

    if (nombre !== "" && descripcion !== "" && categoria !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${nombre}</strong> 
                        <em>(${categoria})</em>: 
                        ${descripcion}`;
        listaTareas.appendChild(li);

        // limpiar inputs
        inputTareanm.value = "";
        inputTarea.value = ""; 
        inputTareacr.value = "";
    } else {
        alert("Por favor completa todos los campos antes de agregar la tarea.");
    }
}
