// JS para la página de inicio

// Autor: Luis Alberto Castillo Herrera | Email: lacastilloh@poligran.edu.co

function mostrarAlerta(tipo, mensaje) {
  const alerta = document.getElementById('alerta');
  alerta.className = 'alerta ' + tipo;
  alerta.textContent = mensaje;
  alerta.style.display = 'block';
  setTimeout(() => alerta.style.display = 'none', 4000);
}

// Ejemplo alerta
// mostrarAlerta('exito', 'Bienvenido a TasksPro!');
