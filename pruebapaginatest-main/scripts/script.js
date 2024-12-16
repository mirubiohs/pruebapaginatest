// Obtener elementos
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

// Asegurarse de que el menú esté cerrado al cargar la página
menu.style.height = '0';
menu.style.padding = '0';
menu.style.width = '0';
overlay.style.display = 'none'; // El overlay está oculto por defecto

// Agregar evento para abrir/cerrar menú
menuToggle.addEventListener('click', () => {
  const isOpen = menu.style.height && menu.style.height !== '0px';

  if (isOpen) {
    // Si está abierto, lo cerramos
    menu.style.height = '0';
    menu.style.padding = '0';
    menu.style.width = '0';
    overlay.style.display = 'none'; // Oculta el overlay
  } else {
    // Si está cerrado, lo abrimos
    menu.style.height = 'calc(100vh - 60px)'; // Toda la altura menos el header
    menu.style.width = '20%'; // 1/5 del ancho de la pantalla
    menu.style.padding = '20px 0'; // Agregar un padding para el contenido
    overlay.style.display = 'block'; // Muestra el overlay
  }
});

// Evento para cerrar el menú si se hace clic en el overlay
overlay.addEventListener('click', () => {
  menu.style.height = '0';
  menu.style.padding = '0';
  menu.style.width = '0';
  overlay.style.display = 'none'; // Oculta el overlay
});


// ¡Agrega funcionalidad interactiva si lo deseas! Por ejemplo:
document.querySelector('.motorcycle').addEventListener('click', () => {
  alert('¡La motocicleta sigue su camino!');
});


