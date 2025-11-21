// main.js - Versión con localStorage

// Verificar si ya tenemos datos guardados
window.addEventListener('DOMContentLoaded', function() {
    const nombreGuardado = this.sessionStorage.getItem('nombreUsuario');
    const edadGuardada = sessionStorage.getItem('edadUsuario');
    
    if (nombreGuardado && edadGuardada) {
        // Si ya tenemos datos, mostramos el saludo personalizado sin pedir datos nuevamente
        mostrarSaludoGuardado(nombreGuardado, edadGuardada);
        agregarBotonCambiar();
    } else {
        // Si no hay datos, pedimos la información
        solicitarDatosIniciales();
    }
});

function solicitarDatosIniciales() {
    let nombreInput = prompt('Por favor, ingrese su nombre:', 'Nombre aquí');
    
    let nombreFinal;
    if (nombreInput === null || nombreInput === 'Nombre aquí' || nombreInput.trim() === '') {
        nombreFinal = "Invitado/a";
    } else {
        nombreFinal = nombreInput;
    }

    let edadStr = prompt('Por favor, ingrese su edad:', 'Edad aquí');
    let edad = Number(edadStr);

    // Validación de edad
    if (edad >= 18) {
        alert('Eres mayor de edad, puedes continuar navegando en el sitio.');
    } else if (edadStr !== null && edadStr !== 'Edad aquí' && !isNaN(edad) && edad < 18) {
        alert('Eres menor de edad, no deberías estar navegando en este sitio.');
    } else {
        alert('No se pudo verificar la edad o la entrada no es válida. Por favor, recarga la página.');
        window.location.reload();
        return;
    }

    // Guardar en localStorage
    sessionStorage.setItem('nombreUsuario', nombreFinal);
    sessionStorage.setItem('edadUsuario', edad);

    // Actualizar la interfaz
    const titulo = document.getElementById('bienvenida');
    titulo.textContent = `Hola, ${nombreFinal}! Ahora tienes acceso.`;
    titulo.className = 'bienvenida-personalizada';
    
    // Agregar botón para cambiar datos
    agregarBotonCambiar();
}

function mostrarSaludoGuardado(nombre, edad) {
    const titulo = document.getElementById('bienvenida');
    titulo.textContent = `Hola, ${nombre}! Ahora tienes acceso.`;
    titulo.className = 'bienvenida-personalizada';
}

function cambiarDatos() {
    if (confirm("¿Deseas cambiar tu nombre y/o edad?")) {
        // Limpiar datos guardados
        sessionStorage.removeItem('nombreUsuario');
        sessionStorage.removeItem('edadUsuario');
        
        // Volver a solicitar datos
        solicitarDatosIniciales();
    }
}

function agregarBotonCambiar() {
    // Verificar si el botón ya existe
    if (document.getElementById('boton-cambiar-datos')) {
        return;
    }
    
    const botonCambiar = document.createElement('button');
    botonCambiar.id = 'boton-cambiar-datos';
    botonCambiar.textContent = 'Cambiar mis datos';
    botonCambiar.style.cssText = `
        display: block;
        margin: 20px auto;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    botonCambiar.addEventListener('click', cambiarDatos);
    document.body.appendChild(botonCambiar);
}