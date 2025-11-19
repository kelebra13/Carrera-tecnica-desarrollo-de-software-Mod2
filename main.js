
let nombreInput = prompt('Por favor, ingrese su nombre:', 'Nombre aquí');


let nombreFinal;
if (nombreInput === null || nombreInput === 'Nombre aquí' || naombreInput.trim() === '') {
    nombreFinal = "Invitado/a";
} else {
    nombreFinal = nombreInput;
}

const titulo = document.getElementById('bienvenida');
titulo.textContent = `Hola, ${nombreFinal}! Ahora tienes acceso.`;


let edadStr = prompt('Por favor, ingrese su edad:', 'Edad aquí');
let edad = Number(edadStr);

if (edad >= 18) {
    alert('Eres mayor de edad, puedes continuar navegando en el sitio.');
} else if (edadStr !== null && edadStr !== 'Edad aquí' && !isNaN(edad) && edad < 18) {
    alert('Eres menor de edad, no deberías estar navegando en este sitio.');
} else {
    alert('No se pudo verificar la edad o la entrada no es válida. Por favor, recarga la página.');
    window.location.reload();
}
