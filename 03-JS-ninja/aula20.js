// Parâmetros para IIFE
	// quando temos objetos globais, nós podemos passar por parâmetro para a IIFE, para que esses parâmetros sejam uma representação do objeto externo (global), mas usados de forma local.
    (function(win) {
        console.log( win === window ); // true
    })(window);

// Loops em uma única linha	
// Vamos procurar evitar ao máximo utilizar `if`s, e mais ainda `else`, por deixar o código mais complexo e difícil de entender. Sempre que utilizar `if`, vamos usar o `if` pequeno, com apenas uma linha e removendo as chaves. O mesmo vale para `while` e `for`. Sem as chaves apenas a primeira linha é executada com a condição.
    (function(win) {
          if( win === window )
            console.log( 'win é uma referência local à window' );
    })(window);		

    (function(win) {
          if( win !== window )
            console.log( 'win é uma referência local à window' );
            console.log( 'Essa mensagem sempre é mostrada, independente do if' );
    })(window);

// Métodos Window
// window.alert - dá uma mensagem na tela bloqueando a navegação
    window.alert('Uma mensagem de alerta para o usuário');

// Não é obrigatório colocar window antes das propriedades, pois o window é o objeto global do Js
    alert('Funciona sem window'); 

// window.prompt - faz uma pergunta ao usuario e retorna a resposta no console
    prompt( 'Pergunta?' );

    var name = prompt( 'Qual o seu nome?' );
    if ( name )
        console.log( 'Olá', name );
    else
        console.log( 'não respondeu :[' );

// window.confirm - confirma uma pergunta
    var del = prompt( 'Deseja realmente excluir?' );
    if ( del )
        console.log( 'Excluido com sucesso!', del );
    else
        console.log( 'Ação cancelada!' );

// Document - o document é o documento html ou DOM (document object model)
// Seleção de elementos
// Métodos dinâmicos, são mutantes, eles mudam sozinhos causando efeito colateral.
    (function( win, doc ) {
          'use strict';	
      // getElementById - busca pela marcação de Id e retorna o objeto html
          console.log( doc.getElementById( 'my-link' ) );

      // getElementsByClassName - busca pela marcação de class e retorna o html collection que funciona como array
          console.log( doc.getElementsByClassName( 'my-link' ) );

      // getElementsByTagName - busca pela marcação das tags html e retorna o html collection com todas as tags passadas como parametro
          console.log( doc.getElementsByTagName( 'a' ) );

      // getElementsByName - usado em formulários para obter os nomes
          console.log( doc.getElementsByName( 'username' ) );
    })( window, document );

// Métodos estáticos, usam a nomenclatura de seletores css, e não causam efeito colateral. Geralmente quando se faz variáveis que vão fazer referencia ao DOM usasse o $ no início do nome
    var $inputs = document.querySelector('input'); // seleciona apenas um
    $inputs = document.querySelectorAll('input'); // seleciona todos
    $inputs = document.querySelector('[type="text"]');
    $inputs = document.querySelectorAll('.button');
    $inputs = document.querySelector('#identificado');

// Manipulação de elementos ( formulários )
// O value retorna o valor do campo pedido, você pode utilizar ele tanto para pegar quanto para atribuir 
(function( win, doc ) {
    // Pegando valores
    var $inputUsername = doc.querySelector( '#username' );
    var $inputPassword = doc.querySelector( '#password' );
    console.log( $inputUsername.value );
    console.log( $inputPassword.value );

    // Atribuindo valores e alterando para os valores atribuidos
    $inputUsername.value = 'Clara Verena';
    $inputPassword.value = 'senha';
})( window, document );

// Introdução a eventos
// Para adiconar eventos utilizamos o método .addEventListener(evento, função de callback, );
    // Click
        var $button = doc.querySelector( '#button' );
        $button.addEventListener( 'click', function(event){
            event.preventDefault(); // previne o evento padrão
            console.log('Click no botão');
        }, false );
