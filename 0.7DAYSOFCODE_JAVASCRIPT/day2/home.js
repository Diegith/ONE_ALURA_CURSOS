document.addEventListener('DOMContentLoaded', function() {
    const name = localStorage.getItem('name');
    const edad = localStorage.getItem('edad');
    const lengProg = localStorage.getItem('lengProg');

    // Crear el mensaje de éxito utilizando un template string
    const successMessage = `Hola ${name}, tienes ${edad} años y ya estas aprendiendo a programar en: ${lengProg}`;

    // Mostrar el mensaje en la página
    document.querySelector('h3').innerHTML = successMessage;
});