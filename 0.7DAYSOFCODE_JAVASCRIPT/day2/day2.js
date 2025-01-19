document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario
        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value.trim();
        const edad = document.getElementById('edad').value.trim();
        const lengProg = document.getElementById('lengProg').value.trim();

        // Validar que los campos no estén vacíos
        if (name === '' || edad === '' || lengProg === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }
        localStorage.setItem('name', name);
        localStorage.setItem('edad', edad);
        localStorage.setItem('lengProg', lengProg);


        console.log('Formulario enviado!'); // Mensaje en consola
        // Aquí puedes agregar validaciones adicionales si es necesario

        // Redirige a la nueva vista
        window.location.href = 'home.html';
    });
});