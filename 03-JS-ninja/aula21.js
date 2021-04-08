// Síncrono e Assíncrono 
	// Sincrono é um evento que acontece um comando após o outro, por exemplo o console.log. Eventos sincronos consomem muito do navegador pois bloqueiam a ação enquanto estão rodando.

	// Asssincrono é quando precisamos aguardar alguma ação do usuário, temporizador entre outros. Existem alguns eventos no Js que são assíncronos. Event Loop serve para organizar os eventos em uma fila para irem rodando até que o comando seja dado.

	// setTimeout(função callbak, tempo em milisegundo); - temporizador assíncrono
    console.log('inicio');
    setTimeout(function(){
        console.log( 'executou setTimeout' )
    }, 1000);
    console.log('fim');
    // ele executa primeiro os sincronos pra depois executar os assincronos
    /* inicio
       fim
       executou setTimeout */

// setInterval(função callbak, tempo em milisegundo); - temporizador assíncrono que roda de tanto em tanto tempo
    console.log('inicio');
    setInterval(function(){
        console.log( 'executou setInterval' )
    }, 1000);
    console.log('fim');
// ele vai executando a cada 1s até que vc saia ou recarregue a página
// setTimeout recursivo
    var counter = 0;
    function timer(){
        console.log( 'timer', counter++ );
        if ( counter > 10 ) // parando funções recurcivas
            return; 
        setTimeout( timer, 1000 );			
    }
    timer();
// As vantagens de usar o setTimeout recursivo é a performance que no interval é pior para tempos pequenos. Se for para tempos grandes é legal usar o interval.
    
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
    <button data-js="button"></button>