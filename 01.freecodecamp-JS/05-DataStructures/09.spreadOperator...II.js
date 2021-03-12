/* Combine Arrays com o Operador Spread

Outra grande vantagem do operador spread é a capacidade de combinar arrays, ou inserir todos os elementos de um
array em outro, em qualquer índice. Com sintaxes mais tradicionais, podemos concatenar matrizes, mas isso apenas
nos permite combinar matrizes no final de uma e no início de outra. A sintaxe de propagação torna a seguinte operação
extremamente simples:

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

thatArray teria o valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando a sintaxe de propagação, acabamos de alcançar uma operação que teria sido mais complexa e detalhada
se tivéssemos usado métodos tradicionais.

Definimos uma função spreadOut que retorna a variável 'sentence'. Modifique a função usando o operador de propagação
 para que ela retorne o array ['learning', 'to', 'code', 'is', 'fun'] :

 function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence; // Change this line
  return sentence;
}

console.log(spreadOut());

*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment, 'is', 'fun']
  return sentence;
}

console.log(spreadOut());