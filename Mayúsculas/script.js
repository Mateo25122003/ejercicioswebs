function convertirMayusculas() {
  const texto = document.getElementById("texto").value;
  const resultado = texto.toUpperCase();
  document.getElementById("resultado").textContent = resultado;
}
