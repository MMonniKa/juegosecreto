let numeroSecreto = 0;
let intentos = 0;
let listanumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
   console.log(intentos);
   if(numeroUsuario === numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ?'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
    // El usuario no acerto
      if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');
      } else {
        asignarTextoElemento('p', 'El numero secreto es mayor');
      }
      intentos++;
      limpiarCaja();
   }
    return;
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listanumerosSorteados);
   //Si ya sorteammos todoslos numeros
   if(listanumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p', 'Ya se sorteron todos los numeros posibles');
   }else
   // Si el numero generado esta en la lista

   if (listanumerosSorteados.includes(numeroGenerado)) {
       return generarNumeroSecreto();
   }else {
    listanumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
    
}

function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del numero secreto');
  asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  // 1- limpiar caja
  limpiarCaja();
  // 2- Indicar mensaje de inicio
  // 3- Generar numero aleatorio
  // 4- Inicializar numero de intentos
  condicionesIniciales();
  // 5- Deshabilitar boton nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
  
}

condicionesIniciales();