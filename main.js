// Obtener el nombre del usuario
let nombreInput = prompt('Por favor, ingrese su nombre:', 'Nombre aquí');

// Determinar el nombre final para el saludo (maneja null, vacío o el valor por defecto)
let nombreFinal;
if (nombreInput === null || nombreInput === 'Nombre aquí' || nombreInput.trim() === '') {
    nombreFinal = "Invitado/a";
} else {
    nombreFinal = nombreInput;
}

// Actualizar el título de bienvenida
const titulo = document.getElementById('bienvenida');
titulo.textContent = `Hola, ${nombreFinal}! Ahora tienes acceso.`;

// Obtener la edad
let edadStr = prompt('Por favor, ingrese su edad:', 'Edad aquí');
let edad = Number(edadStr);

// Lógica de validación
if (edad >= 18) {
    alert('Eres mayor de edad, puedes continuar navegando en el sitio.');
} else if (edadStr !== null && edadStr !== 'Edad aquí' && !isNaN(edad) && edad < 18) {
    // Condición más estricta para asegurar que se ingresó un valor numérico real menor a 18
    alert('Eres menor de edad, no deberías estar navegando en este sitio.');
} else {
    // Captura Cancelar o entradas no válidas (texto, por ejemplo)
    alert('No se pudo verificar la edad o la entrada no es válida. Por favor, recarga la página.');
    window.location.reload();
}