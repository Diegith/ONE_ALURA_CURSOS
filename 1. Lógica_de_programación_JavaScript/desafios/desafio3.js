//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while (contador <= 10) {
    alert(contador);
    contador = contador + 1;
}


// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
contador = 10;
while (contador >= 0) {
    alert(contador);
    contador = contador - 1;
}


//3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let tiempoRegresivo = prompt("Ingresa un tiempo: ");
while (tiempoRegresivo >= 0) {
    console.log(tiempoRegresivo);
    tiempoRegresivo = tiempoRegresivo - 1;
}



// 4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
contador = 0;
tiempoRegresivo = prompt("Ingresa un tiempo: ");
while (contador <= tiempoRegresivo) {
    console.log(contador);
    contador += 1;
}



