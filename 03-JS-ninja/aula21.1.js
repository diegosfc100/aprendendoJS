// SYNC / ASYNC - Síncrono e Assíncrono 
	/* Sincrono é um evento que acontece um comando após o outro, por exemplo o console.log.
    Eventos sincronos consomem muito do navegador pois bloqueiam a ação enquanto estão rodando. */
    console.log(1);
    console.log(2);
    console.log(3);

    //outro exemplo Síncrono é loop FOR, euquanto ele não terminar a iteração, a tela ficará bloqueada.
    console.log(0);
    for(var i = 1; i <= 10; i++ ){
        console.log(i);
    }
    console.log(11);


    /* Asssincrono é quando precisamos aguardar alguma ação do usuário, temporizador entre outros.
    Existem alguns eventos no Js que são assíncronos. Event Loop serve para organizar os eventos em uma fila
    para irem rodando até que o comando seja dado. */

    console.log("início");
    document.addEventListener('click', function(){
        console.log('clicou no parágrafo.')
    },false);
    console.log('fim');