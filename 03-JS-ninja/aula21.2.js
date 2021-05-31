(function(win, doc){

// setTimeout(função callbak, tempo em milisegundo); - temporizador assíncrono
       
    console.log('inicio');
    setTimeout(function(){
        console.log( 'executou setTimeout' )
    }, 1000); // 5000 minisegundos = 1seg
    console.log('fim');
    
    // ele executa primeiro os sincronos pra depois executar os assincronos
    /* inicio
    fim
    executou setTimeout */


// setInterval(função callbak, tempo em milisegundo); - temporizador assíncrono que roda de tanto em tanto tempo
    
    console.log('inicio');
    setInterval(function(){
        console.log( 'executou setInterval' )
    }, 1000); // ele vai executando a cada 1s até que vc saia ou recarregue a página
    console.log('fim');


// setTimeout recursivo
var counter = 0;
function timer(){
    console.log( 'timer', counter++ );
    if ( counter > 10 ) // parando funções recurcivas
        return; 
    setTimeout( timer, 1000 );			
}
timer();
/* As vantagens de usar o setTimeout recursivo é a performance que no interval é pior para tempos pequenos. 
Se for para tempos grandes é legal usar o interval.*/
















})(window, document)