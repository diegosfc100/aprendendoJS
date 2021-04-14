/* Encontre a palavra mais longa em uma string.

Retorne o comprimento da palavra mais longa na frase fornecida. Sua resposta deve ser um número. 

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

*/

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let len = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > len) {
          len = arr[i].length;
      }
  }
  return len;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));