// Parâmetros para IIFE
	/* quando temos objetos globais, nós podemos passar por parâmetro para a IIFE, para que esses parâmetros
     sejam uma representação do objeto externo (global), mas usados de forma local. */
     (function(win) {
        console.log( win === window ); // true
    })(window);

// Loops em uma única linha	
/* Vamos procurar evitar ao máximo utilizar `if`s, e mais ainda `else`, por deixar o código mais complexo e difícil
 de entender. Sempre que utilizar `if`, vamos usar o `if` pequeno, com apenas uma linha e removendo as chaves.
  O mesmo vale para `while` e `for`. Sem as chaves apenas a primeira linha é executada com a condição. */

    (function(win) {
          if( win === window )
            console.log( 'win é uma referência local à window' );
    })(window);		

    (function(win) {
          if( win !== window )
            console.log( 'win é uma referência local à window' );
            console.log( 'Essa mensagem sempre é mostrada, independente do if' );
    })(window);


// MÉTODOS Window
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