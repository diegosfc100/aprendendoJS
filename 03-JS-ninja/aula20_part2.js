 // DOM
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

        console.log( doc.getElementsByTagName('input'));    


    // getElementsByName - usado em formulários para obter os nomes
        console.log( doc.getElementsByName( 'username' ) );
   
   
    })( window, document ); // fechamento da iife





