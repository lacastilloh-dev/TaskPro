
# TasksPro

**Autor:** Luis Alberto Castillo Herrera  
**Fecha de creación:** Mayo 27-2025


**TasksPro** es una plataforma web sencilla para la gestión de tareas con control de acceso por roles. Fue desarrollada como parte del módulo *Fundamentos de la Integracion Continua* del Politécnico Grancolombiano.

## Funcionalidades

- Registro de usuarios con rol: Administrador o Visualizador
- Inicio de sesión con autenticación básica
- Dashboard personalizado según rol
- CRUD de tareas (solo para Administrador)
- Visualización de tareas
- Persistencia de datos con `localStorage`
- Diseño responsivo y navegación intuitiva

## Estructura del Proyecto

```
TasksPro/
│
├── index.html          # Página de inicio
├── registro.html       # Registro de usuarios
├── login.html          # Inicio de sesión
├── dashboard.html      # Panel de usuario
├── tareas.html         # Gestión de tareas (Administrador)
├── contacto.html       # Formulario de contacto
│
├── js/
│   └── script.js       # Lógica de frontend con localStorage
│
└── css/
    └── (Todos los archivos CSS para cada pagina)
```

## Tecnologías Usadas

- HTML5
- CSS3
- JavaScript
- LocalStorage (para persistencia en el navegador)

## Uso

1. Clona o descarga este repositorio.
2. Abre la carpeta en Visual Studio Code.
3. Inicia el proyecto con una extensión como **Live Server** o abre `index.html` directamente en el navegador.
4. Crea un usuario desde `registro.html`, inicia sesión, y empieza a gestionar tus tareas.


---

© 2025 TasksPro - Proyecto académico
