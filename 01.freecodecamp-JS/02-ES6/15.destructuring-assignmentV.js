/* Use a atribuição de desestruturação com o parâmetro Rest para reatribuir os elementos do array

Em algumas situações que envolvem a desestruturação de array, podemos querer coletar o resto dos elementos em um array
separado.

O resultado é semelhante a Array.prototype.slice(), conforme mostrado abaixo: */

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log (a, b); // 1, 2
console.log (arr); // [3, 4, 5, 7]

/* As variáveis a e b obtêm o primeiro e o segundo valores da matriz. Depois disso, devido à presença do parâmetro rest, 
arr obtém o resto dos valores na forma de um array. O elemento rest só funciona corretamente como a última variável da lista.
Como em, você não pode usar o parâmetro rest para capturar um subarray que deixa de fora o último elemento do array original.

Use a atribuição de desestruturação com o parâmetro rest para executar um Array.prototype.slice() eficaz de forma que arr
seja uma submatriz da fonte original da matriz com os dois primeiros elementos omitidos. */

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [a,b, ...arr] = list;


  return arr;
}
const arr = removeFirstTwo(source);
