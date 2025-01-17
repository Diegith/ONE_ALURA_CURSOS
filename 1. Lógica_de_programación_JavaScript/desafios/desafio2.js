//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt("Qué día de la semana es hoy?");
if(diaSemana == "Sábado"){
    alert("¿Buen fin de semana!");
}
else{
    alert("¡Buena semana!");
}

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroIngresado = prompt("Ingresa un número: ");
if(numeroIngresado > 0){
    alert("El número ingresado es positivo.");
}
else{
    alert("El número ingresado es negativo o cero.");
}

//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion = prompt("¿Cuál es tu puntuación?");
if(puntuacion >= 100){
    alert("¡Felicidades, has ganado!");
}
else{
    alert("Intentalo nuevamente para ganar.");
}

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = prompt("¿Cuál es tu saldo?");
alert(`Tu saldo es de $${saldo}.`);

//5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("Ingresa tu nombre: ");
alert(`¡Bienvenido, ${nombre}!`);