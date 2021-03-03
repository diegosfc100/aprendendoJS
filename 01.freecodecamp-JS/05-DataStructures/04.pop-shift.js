/* Remova itens de uma matriz com pop() e shift()

Push() e unshift() têm métodos correspondentes que são quase opostos funcionais: pop() e shift().
Como você já deve ter adivinhado, em vez de adicionar, pop() remove um elemento do final de um array, 
enquanto shift() remove um elemento do início. A principal diferença entre pop() e shift() e seus primos 
push() e unshift(), é que nenhum dos métodos usa parâmetros e cada um permite que um array seja modificado por
um único elemento por vez.

Vamos dar uma olhada:
let saudações = ['e aí?', 'olá', 'até mais!'];

greetings.pop ();
// agora é igual a ['e aí?', 'olá']

greetings.shift();
// agora é igual a ['hello']

Também podemos retornar o valor do elemento removido com qualquer método como este:

let popped = greetings.pop();
// retorna 'olá'
// greeting agora é igual a [];

Definimos uma função, popShift, que recebe um array como argumento e retorna um novo array.
Modifique a função, usando pop() e shift(), para remover o primeiro e o último elementos da matriz de argumento
e atribua os elementos removidos às suas variáveis ​​correspondentes, de modo que a matriz retornada contenha seus 
valores :

function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

*/

function popShift(arr) {
 
  let popped = arr.pop();
  let shifted = arr.shift();

  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));