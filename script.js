// -----------------------------
// Mostrar la hora en tiempo real
// -----------------------------
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-MX', { hour12: false });
  document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// -----------------------------
// Mostrar la fecha
// -----------------------------
function updateDate() {
  const today = new Date();
  const dateString = today.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('date').textContent = dateString;
}
updateDate();

// -----------------------------
// Obtener ubicación del usuario
// -----------------------------
function getLocation() {
  if (!navigator.geolocation) {
    document.getElementById('location').textContent = "La geolocalización no es soportada por este navegador.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      const accuracy = pos.coords.accuracy;

      document.getElementById('location').textContent = "Ubicación obtenida:";
      document.getElementById('coords').innerHTML = `
        <li><strong>Latitud:</strong> ${lat}</li>
        <li><strong>Longitud:</strong> ${lon}</li>
        <li><strong>Precisión:</strong> ±${accuracy} metros</li>
      `;
    },
    (error) => {
      document.getElementById('location').textContent = "No se pudo obtener la ubicación: " + error.message;
    }
  );
}

// Llamar a la función al cargar la página
getLocation();