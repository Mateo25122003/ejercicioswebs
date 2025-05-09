function calcularEdad() {
  const input = document.getElementById("yearInput").value;
  const añoActual = new Date().getFullYear();

  if (input && !isNaN(input)) {
    const edad = añoActual - parseInt(input);
    document.getElementById("resultado").textContent = `Tienes ${edad} años.`;
  } else {
    document.getElementById("resultado").textContent = "Por favor ingresa un año válido.";
  }
}
