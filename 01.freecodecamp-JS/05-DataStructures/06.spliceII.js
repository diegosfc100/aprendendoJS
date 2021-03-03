/* Adicionar itens usando splice()

Lembra que no último desafio mencionamos que splice() pode ter até três parâmetros? Bem, você pode usar o terceiro
parâmetro, composto de um ou mais elemento(s), para adicionar ao array. Isso pode ser extremamente útil para trocar 
rapidamente um elemento, ou um conjunto de elementos, por outro. */

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// a segunda entrada de 12 é removida e adicionamos 13 e 14 no mesmo índice
console.log(numbers);
// retorna [10, 11, 12, 13, 14, 15]

/* Aqui, começamos com uma matriz de números. Em seguida, passamos o seguinte para splice(): O índice no qual começa
a excluir os elementos(3), o número de elementos a serem excluídos(1) e os argumentos restantes(13, 14) serão inseridos
a partir desse mesmo índice. Observe que pode haver qualquer número de elementos (separados por vírgulas) após
amountToDelete, cada um dos quais é inserido.

Definimos uma função, htmlColorNames, que recebe um array de cores HTML como argumento. Modifique a função usando
splice() para remover os dois primeiros elementos da matriz e adicionar 'DarkSalmon' e 'BlanchedAlmond' em seus 
respectivos lugares :

function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

*/