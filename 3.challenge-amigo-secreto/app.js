// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo !== '') {
        amigos.push(amigo);
        mostrarAmigos();
        limpiar();
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de agregar los elementos
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });    
}

function limpiar() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    resultado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${resultado}`;
}