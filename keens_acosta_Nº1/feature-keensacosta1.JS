async function buscarClima() {
  const ciudad = document.getElementById("ciudad").value;
  const resultado = document.getElementById("resultado");
  const error = document.getElementById("error");

  resultado.innerHTML = "";
  error.textContent = "";

  if (!ciudad) {
    error.textContent = "Por favor ingresa una ciudad.";
    return;
  }

  const apiKey = "TU_API_KEY"; // 🔹 Reemplaza con tu clave de OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error("Ciudad no encontrada");
    }

    const datos = await respuesta.json();
    const nombre = datos.name;
    const temp = datos.main.temp;
    const descripcion = datos.weather[0].description;
    const icono = datos.weather[0].icon;

    resultado.innerHTML = `
      <h2>${nombre}</h2>
      <p>🌡 Temperatura: ${temp} °C</p>
      <p>${descripcion}</p>
      <img src="https://openweathermap.org/img/wn/${icono}@2x.png" alt="icono clima">
    `;
  } catch (e) {
    error.textContent = "Error: " + e.message;
  }
}
