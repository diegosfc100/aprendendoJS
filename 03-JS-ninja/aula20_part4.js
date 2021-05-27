
// Manipulação de elementos ( formulários )
// O value retorna o valor do campo pedido, você pode utilizar ele tanto para pegar quanto para atribuir 
(function( win, doc ) {
    // Pegando valores
    var $inputUsername = doc.querySelector( '#username' );
    var $inputPassword = doc.querySelector( '#password' );
    console.log( $inputUsername.value );
    console.log( $inputPassword.value );


    // Atribuindo valores e alterando para os valores atribuidos
    $inputUsername.value = 'Diego Rodrigues';
    $inputPassword.value = 'senha';

    console.log($inputUsername.value, $inputPassword.value);


 
// Introdução a EVENTOS
// Para adiconar eventos utilizamos o método .addEventListener(evento, função de callback, );
    // Click
        var $button = doc.querySelector( '#button' );

        $button.addEventListener( 'click', function(event){
            event.preventDefault(); // previne o evento padrão
            console.log('Click no botão');
        }, false );


        $inputUsername.addEventListener('click', function(){
            alert('Clicou no input'); // ao clicar no campo de input a mensagem será exibida
        }, false);

})( window, document );