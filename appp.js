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

i18next.init({
  lng: "es", // idioma inicial
  resources: {
    es: {
      translation: {
        "titulo": "Agregar Tareas",
        "subtitulo": "Agregar tarea",
        "label_nombre": "Nombre de la tarea:",
        "placeholder_tarea": "Escribe una tarea...",
        "label_descripcion": "Descripción:",
        "placeholder_descripcion": "Describe la tarea...",
        "label_categoria": "Categoría:",
        "opcion_seleccione": "Seleccione una categoría",
        "opcion_estudio": "Estudio",
        "opcion_trabajo": "Trabajo",
        "opcion_personal": "Personal",
        "boton_agregar": "Agregar Tarea"
      }
    },
    en: {
      translation: {
        "titulo": "Add Tasks",
        "subtitulo": "Add Task",
        "label_nombre": "Task Name:",
        "placeholder_tarea": "Type a task...",
        "label_descripcion": "Description:",
        "placeholder_descripcion": "Describe the task...",
        "label_categoria": "Category:",
        "opcion_seleccione": "Select a category",
        "opcion_estudio": "Study",
        "opcion_trabajo": "Work",
        "opcion_personal": "Personal",
        "boton_agregar": "Add Task"
      }
    }
  }
}, function() {
  actualizarTexto();
});


function actualizarTexto() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n");
    el.textContent = i18next.t(clave);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const clave = el.getAttribute("data-i18n-placeholder");
    el.placeholder = i18next.t(clave);
  });
}


document.getElementById("btnIdioma").addEventListener("click", function() {
  const nuevoIdioma = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(nuevoIdioma, actualizarTexto);
});
