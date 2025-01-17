/* 
Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
Declara una variable llamada nombre y asígnale el valor "Lua".
Crea una variable llamada edady asígnale el valor 25.
Establece una variable numeroDeVentas y asígnale el valor 50.
Establece una variable saldoDisponible y asígnale el valor 1000.
Muestra una alerta con el texto "¡Error! Completa todos los campos".
Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
Utiliza un prompt para preguntar el nombre del usuario y almacénalo 
en la variable nombre.
Pide al usuario que ingrese su edad usando un prompt y almacénala en la 
variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el 
mensaje "¡Puedes obtener tu licencia de conducir!".Si necesitas ayuda, 
las soluciones a las actividades estarán disponibles en la sección

*/
//Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

//Declarar variables 
let nombre = "Lua";
let edady = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

//Muestra una alerta con el texto "¡Error! Completa todos los campos".
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

nombre = prompt("¿Cuál es tu nombre?");
edady = prompt("¿Cuál es tu edad?");
if(edady >= 18){
    alert("¡Puedes obtener tu licencia de conducir");
}
else{
    alert("¡No puedes obtener tu licencia de conducir!");
}