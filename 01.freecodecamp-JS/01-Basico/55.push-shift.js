/* Ficar na fila.

Na Ciência da Computação, uma fila é uma Estrutura de Dados abstrata onde os itens são mantidos em ordem.
Novos itens podem ser adicionados no final da fila e itens antigos podem ser retirados do início da fila.

Escreva uma função nextInLine que recebe uma array(arr) e um number(item) como argumentos.
Adicione o número ao final da array e remova o primeiro elemento da array.
A função nextInLine deve então retornar o elemento que foi removido.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  //


  function feira(arr, item){
      arr.push(item); // adiciona elementos no final do array
      return arr.shift(); // shift remove primeiro elemento de um array.
  }

  var frutas = ["Abacaxi", "Banana", "Cajú"]

  console.log("Antes: " +JSON.stringify(frutas))
  console.log(feira(frutas,"Damasco"));
  console.log("Depois: " + JSON.stringify(frutas));