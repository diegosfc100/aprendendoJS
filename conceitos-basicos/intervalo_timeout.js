/* setInterval() e setTimeout() são funções temporizadoras.
Elas executam uma função de callback após determinado tempo. */

function escrever(){
    console.log('Santos Futebol Clube');
}

//INTERVALO: Executa um bloco específico repetidamente com um intervalo fixo entre cada chamada.
setInterval(escrever, 1000); // a função será executara(impressa) a cada 1 segundo.

//TIMEOUT: Executa um bloco específico uma vez depois de um determinado tempo
setTimeout(escrever, 3000); // delay, em 3 segundos a função será executada. uma vez só.

// para nao bugar, comente um para executar o outro.


setTimeout( function() {
    console.log( 'Executa uma vez após 1 segundo.' );
  }, 1000 );
    

setInterval( function() {
    console.log( 'Executa infinitamente, 1 vez por segundo.' );
  }, 1000 );

/* Como você pode ver, a sintaxe para as duas é a mesma: o primeiro parâmetro é uma função de callback que será executada
após x milissegundos, passados no segundo parâmetro.

A principal diferença entre elas é que:

    setInterval() executa infinitamente, até que você execute clearInterval();
    setTimeout() executa apenas uma vez.

Você pode remover um temporizador, atribuindo ele a uma variável, e depois usando clearInterval( variavel ) 
para o setInterval(), e clearTimeout( variavel ) para setTimeout().


Um exemplo prático: */

var counter = 0;
let timer = setInterval(function() {
  if( counter >= 10 ) {
    clearInterval( timer );
  }
  
  console.log( counter++ );
}, 1000); // você pode constatar que é printado o valor de 0 a 10, e então o temporizador é removido.

// Para usar com o setTimeout(), poderíamos fazer algo assim:

var counter = 0;
function myTimer() {
  let timer = setTimeout( function() {
    console.log( counter++ );
    if( counter < 11 ) {
      myTimer();
    }
  }, 1000 );
}
  
myTimer();