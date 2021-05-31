(function(win, doc){
// clearTimeout(id) - limpa o setTimeout
    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer(){
        console.log( 'timer', counter++ );
        if ( counter > 10 )
            return; 
        temporizador = setTimeout( timer, 1000 );			
    }
    timer();

    // código do botão que faz o cronometro parar
    $button.addEventListener('click', function(){
        clearTimeout(temporizador);
    }, false);	 



// clearInterval(id) - limpa o setInterval
    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;
    function timer(){
        console.log( 'timer', counter++ );
    }
    temporizador = setInterval( timer, 1000 );			

    // código do botão que faz o cronometro parar
    $button.addEventListener('click', function(){
        clearInterval(temporizador);
    }, false);		



// Para definir objetos vamos usar o data-js
// <button data-js="button"></button>























})(window, document);