let position = 0;
const container = document.getElementById("carousel");
const items = document.querySelectorAll(".trending-item");
const itemWidth = 215; // Ancho + margen

function updateVisibleItems() {
  const containerWidth = container.offsetWidth;
  return Math.floor(containerWidth / itemWidth);
}

function moveCarousel(direction) {
  const visibleItems = updateVisibleItems();
  const maxPosition = items.length - visibleItems;
  position += direction;
  if (position < 0) position = 0;
  if (position > maxPosition) position = maxPosition;

  container.style.transform = `translateX(-${position * itemWidth}px)`;
}

// Escucha cambios de tamaño de ventana para recalcular
window.addEventListener("resize", () => {
  position = 0; // Reinicia la posición al redimensionar
  moveCarousel(0); // Actualiza la posición
});