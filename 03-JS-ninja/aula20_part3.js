(function( win, doc ) {
    'use strict';	

    // getElementsByName - usado em formulários para obter os nomes
    console.log( doc.getElementsByName( 'username' ) );       
       
})( window, document ); // fechamento da iife

     
/*Métodos estáticos, usam a nomenclatura de seletores css, e não causam efeito colateral.
  Geralmente quando se faz variáveis que vão fazer referencia ao DOM usasse o $ no início do nome */
  var $inputs = document.querySelector('input'); // seleciona apenas UM

  $inputs = document.querySelectorAll('input'); // seleciona TODOS

  $inputs = document.querySelector('[type="text"]'); // seleciona por type.

  $inputs = document.querySelectorAll('.button');

  $inputs = document.querySelector('#identificado');
