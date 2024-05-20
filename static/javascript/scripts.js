document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('mode-toggle');
  const currentMode = localStorage.getItem('darkMode') || 'light';

  if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Modo Claro';
  } else {
    toggleButton.textContent = 'Modo Oscuro';
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'dark' : 'light');
    toggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
  });
});

function aumentarImagen(imagen) {
    // Agrega la clase "ampliada" a la imagen al hacer clic
    imagen.classList.toggle("ampliada");
  }