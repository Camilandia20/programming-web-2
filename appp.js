document.getElementById("form-tarea").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("tareaInput").value.trim();
    let descripcion = document.getElementById("descripcion").value.trim();
    let categoria = document.getElementById("categoria").value;

    if (nombre === "" || descripcion === "" || categoria === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `<strong>${nombre}</strong> - ${descripcion} <em>(${categoria})</em>`;

    document.getElementById("listaTareas").appendChild(li);

    document.getElementById("form-tarea").reset();
});





function marcarComoCompletada(elemento) {
  elemento.classList.toggle("completada");
}


const lista = document.getElementById("listaTareas");


function mostrarTareas(tareas) {
  lista.innerHTML = "";
  tareas.forEach((tarea) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => marcarComoCompletada(li));

    const texto = document.createElement("span");
    texto.textContent = tarea;

    li.appendChild(checkbox);
    li.appendChild(texto);
    lista.appendChild(li);
  });
}


const tareas = ["Estudiar", "Hacer ejercicio", "Leer"];
mostrarTareas(tareas);