const listaTareas = document.getElementById('lista-tareas');
const nuevaTareaForm = document.getElementById('nueva-tarea');

// Función para agregar una nueva tarea
function agregarTarea(nombre) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="nombre">${nombre}</span>
        <span class="acciones">
            <button onclick="editarTarea(this)">Editar</button>
            <button onclick="eliminarTarea(this)">Eliminar</button>
        </span>
    `;
    listaTareas.appendChild(li);
}

// Función para editar una tarea
function editarTarea(boton) {
    const li = boton.parentNode.parentNode;
    const nombre = li.querySelector('.nombre').textContent;
    const nuevoNombre = prompt('Introduzca el nuevo nombre de la tarea:', nombre);
    if (nuevoNombre) {
        li.querySelector('.nombre').textContent = nuevoNombre;
    }
}

// Función para eliminar una tarea
function eliminarTarea(boton) {
    const li = boton.parentNode.parentNode;
    listaTareas.removeChild(li);
}

// Agregar un evento de submit al formulario
nuevaTareaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    if (nombre) {
        agregarTarea(nombre);
        e.target.nombre.value = '';
    }
});

// Inicializar la aplicación
const tareasIniciales = ['Comprar leche', 'Hacer la colada', 'Llamar al doctor'];
tareasIniciales.forEach(tarea => agregarTarea(tarea));
