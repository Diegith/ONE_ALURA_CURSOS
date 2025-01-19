let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
let numeros = [];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);

function MostrarElementos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

MostrarElementos(lenguagesDeProgramacion);

function MostrarElementosInver(lista) {
    for (let i = lista.length; i > 0; i--) {
        console.log(lista[i]);
    }
}

MostrarElementosInver(lenguagesDeProgramacion);

function promedioNumero(lista){
    lista = generarListaAleatoria(numeros);
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    console.log('Pormedio: ' + suma / lista.length);
    return suma / lista.length;
}


function generarListaAleatoria(lista){
    for (let i = 0; i < 10; i++) {
        lista.push(Math.floor(Math.random() * 100));
    }
    console.log(lista);
    return lista;
}

promedioNumero(numeros);


function numeroMayorMenor(lista){
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log('El numero mayor es: ' + mayor);
    console.log('El numero menor es: ' + menor);
    return;
}

numeroMayorMenor(numeros);


function sumaElementos(lista){    
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    console.log(suma);
    return suma;
}

sumaElementos(numeros);


function posicionElemento(lista, elemento){
    let posicion = 0;
    if (lista.includes(elemento)) {
        posicion = lista.indexOf(elemento);
        console.log(posicion);   
        return posicion;     
    }
    else{
        console.log('-1');
        return -1;
    }     
}

posicionElemento(lenguagesDeProgramacion, 'Python');


function sumaListas(lista1, lista2){
    let lista3 = [];
    for (let i = 0; i < lista1.length; i++) {
        lista3.push(lista1[i] + lista2[i]);
    }
    console.log(lista3);
    return lista3;
}

l1 = [];
l2 = [];
sumaListas(generarListaAleatoria(l1), generarListaAleatoria(l2));


function cuadradoLista(lista1){
    let lista3 = [];
    for (let i = 0; i < lista1.length; i++) {
        lista3.push(lista1[i] * lista1[i]);
    }
    console.log(lista3);
    return lista3;
}

cuadradoLista(generarListaAleatoria(numeros));