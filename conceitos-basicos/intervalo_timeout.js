function escrever(){
    console.log('Santos Futebol Clube');
}

//INTERVALO:
setInterval(escrever, 1000); // a função será executara(impressa) a cada 1 segundo.

//TIMEOUT:
setTimeout(escrever, 3000); // delay, em 3 segundos a função será executada. uma vez só.

// para nao bugar, comente um para executar o outro.