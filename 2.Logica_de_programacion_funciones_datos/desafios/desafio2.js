/*
Desafio 2 - 1 
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

*/

function mostrarMensaje() {
    console.log("¡Hola, mundo!");
}

function mostrarMensajePersonalizado(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

function cuadrado(numero){
    return numero * numero;
}

function promedio(a, b, c){
    return (a + b + c) / 3;
}

function numeroMayor(x, y){
    if (x > y)
        return x;
}
function multiplicarPorSiMismo(numero){
    return numero * numero;
}
