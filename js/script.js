 // Autor: Luis Alberto Castillo Herrera | Email: lacastilloh@poligran.edu.co
// Simular base de datos de usuarios y tareas
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
let usuarioActual = JSON.parse(localStorage.getItem('usuarioActual')) || null;

// Registro de usuarios
function registrarUsuario(nombre, email, password, rol) {
  const existe = usuarios.some(user => user.email === email);
  if (existe) {
    alert('El usuario ya está registrado.');
    return false;
  }
  const nuevoUsuario = { nombre, email, password, rol };
  usuarios.push(nuevoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  alert('Registro exitoso');
  return true;
}

// Login
function loginUsuario(email, password) {
  const usuario = usuarios.find(user => user.email === email && user.password === password);
  if (usuario) {
    localStorage.setItem('usuarioActual', JSON.stringify(usuario));
    return usuario;
  } else {
    alert('Credenciales incorrectas');
    return null;
  }
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.removeItem('usuarioActual');
  window.location.href = 'index.html';
}

// Agregar tarea
function agregarTarea(titulo, descripcion, estado) {
  const nuevaTarea = { id: Date.now(), titulo, descripcion, estado };
  tareas.push(nuevaTarea);
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Eliminar tarea
function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Editar tarea
function editarTarea(id, titulo, descripcion, estado) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.titulo = titulo;
    tarea.descripcion = descripcion;
    tarea.estado = estado;
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }
}

// Listar tareas
function obtenerTareas() {
  return tareas;
}

// Obtener usuario actual
function obtenerUsuarioActual() {
  return JSON.parse(localStorage.getItem('usuarioActual'));
}
