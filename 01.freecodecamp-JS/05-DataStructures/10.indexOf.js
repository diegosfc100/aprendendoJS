/* Verifique a presença de um elemento com indexOf()

Uma vez que os arrays podem ser alterados ou transformados a qualquer momento, não há garantia sobre onde uma parte
específica dos dados estará em um determinado array, ou se esse elemento ainda existe. Felizmente, o JavaScript
nos fornece outro método embutido, indexOf(), que nos permite verificar de forma rápida e fácil a presença de um 
elemento em um array. indexOf() recebe um elemento como parâmetro e, quando chamado, retorna a posição, ou índice,
desse elemento, ou -1 se o elemento não existir na matriz.

Por exemplo: */

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');


/* indexOf ('dates') retorna -1, indexOf ('oranges') retorna 2 e indexOf ('pears') retorna 1 
(o primeiro índice em que cada elemento existe).

indexOf() pode ser incrivelmente útil para verificar rapidamente a presença de um elemento em um array.

Definimos uma função, quickCheck, que recebe um array e um elemento como argumentos. 
Modifique a função usando indexOf() para que ela retorne verdadeiro se o elemento passado existir na matriz e 
falso se não existir.

function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

*/

function quickCheck(arr, elem) {
    return arr.indexOf(elem) != -1
    }

console.log(quickCheck(["squash", "onions", "shallots"], "onions")) ;