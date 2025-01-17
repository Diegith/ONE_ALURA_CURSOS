/* Desafío 5

Estudiante: Diego Albarracin

1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.*/

let titulo1 = document.querySelector('h1');
titulo1.innerHTML = '"Hora del Desafío"';

function btnConsole(){
    console.log("El botón fue clicado");
}

function btnPrompt(){
    let ciudad = prompt("Nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

function btnAlert(){
    alert("Yo amo JS" );
}

function btnSuma(){
    n1 = parseInt(prompt("Ingrese el primer número"));
    n2 = parseInt(prompt("Ingrese el segundo número"));
    alert(n1+n2);    
}
