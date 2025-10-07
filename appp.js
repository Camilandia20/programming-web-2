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
