i18next.init({
  lng: "es", // idioma inicial
  resources: {
    es: {
      translation: {
        
      }
    },
    en: {
      translation: {
     
      }
    }
  }
}, function() {
  actualizarTexto();
});

// Función que busca el texto (idioma actual)
function actualizarTexto() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const clave = el.getAttribute("data-i18n"); 
    el.textContent = i18next.t(clave); // usa la traducción
  });
}

// logica botón para cambiar idioma 
document.getElementById("btnIdioma").addEventListener("click", function() {
  const nuevoIdioma = i18next.language === "es" ? "en" : "es";
  i18next.changeLanguage(nuevoIdioma, actualizarTexto);
});
