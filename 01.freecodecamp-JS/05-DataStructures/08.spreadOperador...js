/* Copie um Array com o Spread Operator

Enquanto slice() nos permite ser seletivos sobre quais elementos de um array copiar, entre várias outras tarefas úteis,
o novo operador de propagação do ES6 nos permite copiar facilmente todos os elementos de um array, em ordem, com uma
sintaxe simples e altamente legível. A sintaxe de propagação simplesmente se parece com isto: '...'

Na prática, podemos usar o operador spread para copiar uma matriz assim:

let thisArray = [true, true, undefined, false, null]];
let thatArray = [...thisArray];
// thatArray é igual a [true, true, undefined, false, null]
// thisArray permanece inalterado e thatArray contém os mesmos elementos que thisArray

Definimos uma função, copyMachine, que recebe arr(uma matriz) e num(um número) como argumentos.
A função deve retornar uma nova matriz composta de várias cópias de arr. Fizemos a maior parte do trabalho para você, 
mas ainda não funciona bem. Modifique a função usando a sintaxe de propagação para que funcione corretamente 
(dica: outro método que já abordamos pode ser útil aqui!) :

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

*/

