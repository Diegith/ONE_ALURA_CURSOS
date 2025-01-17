//Variables
let numeroMaximoPosible = parseInt(prompt("Ingresa el número máximo posible: "));
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = parseInt(prompt("Ingresa el número máximo de intentos: "));

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    if (numeroUsuario >= 1 && numeroUsuario <= numeroMaximoPosible) {
        if (numeroUsuario == numeroSecreto) {            
            alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
        } else {
            if (numeroUsuario > numeroSecreto) {
                alert('El número secreto es menor');
            } else {
                alert('El número secreto es mayor');
            }
            
            intentos++;

            if (intentos > maximosIntentos) {
                alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
                break;
            }
            alert('Lo siento, no acertaste el número');
        }
    }
}