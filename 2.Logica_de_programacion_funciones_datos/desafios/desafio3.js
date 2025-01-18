let valor1 = parseInt(document.getElementById('valor1').value);
let valor2 = parseInt(document.getElementById('valor2').value);

function limpiarCaja() {
    document.querySelector('#valor1').value = '';
    document.querySelector('#valor2').value = '';
}

// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(masa, altura){
    imc = masa / (altura * altura);
    document.querySelector('p').innerHTML = `El IMC es: ${imc}`;
    limpiarCaja();
    return imc;
}

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero){
    factorial = 1;
    if(numero === 0 || numero === 1){
        document.querySelector('p').innerHTML = `El factorial de ${numero} es: ${1}`;
    }else{    
        for (i = 1; i <= numero; i++) {
            factorial *= i;        
        }
        document.querySelector('p').innerHTML = `El factorial de ${numero} es: ${factorial}`;        
    }
    limpiarCaja();
    return factorial;
}

//3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function calcularEnDolares(cantidad){
    dolares = cantidad / 4300;
    document.querySelector('p').innerHTML = `La conversión de ${cantidad} pesos es ${dolares} dolares `; 
    limpiarCaja();
    return dolares; 
}

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function perimetroAreaRectangulo(altura, anchura){
    document.querySelector('p').innerHTML = `El perimetro de un rectángulo de altura ${altura} mtrs y anchura ${anchura} mtrs es: ${Math.pow(altura, 2) + Math.pow(anchura, 2)} mtrs y el área de base ${anchura} mtrs y altura ${altura} mtrs es: ${anchura*altura} mtrs cuadrados`; 
    limpiarCaja();
}

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function perimetroAreaCirculo(radio){
    document.querySelector('p').innerHTML = `El perímetro del círculo de radio ${radio} mtrs es: ${2*3.1416*radio} mtrs y el área del círculo de radio ${radio} mtrs es: ${radio*radio*3.1416} mtrs cuadrados`; 
    limpiarCaja();
}

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(numero){
    for(i = 0; i <= 10; i++){
        document.querySelector('p').innerHTML += `${numero} x ${i} = ${numero * i}<br>`
    }
    limpiarCaja();
}