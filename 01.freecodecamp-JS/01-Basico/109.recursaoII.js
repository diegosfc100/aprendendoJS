/* Use a recursão para criar uma contagem regressiva

Em um desafio anterior, você aprendeu como usar a recursão para substituir um loop for.
Agora, vamos examinar uma função mais complexa que retorna uma matriz de inteiros consecutivos começando com 1
até o número passado para a função.

Conforme mencionado no desafio anterior, haverá um caso base. O caso base informa à função recursiva quando ela não
precisa mais se chamar. É um caso simples em que o valor de retorno já é conhecido. Haverá também uma chamada recursiva
que executa a função original com diferentes argumentos. Se a função for escrita corretamente, eventualmente o caso base
será alcançado.

Por exemplo, digamos que você queira escrever uma função recursiva que retorne uma matriz contendo os números de 1 a n.
Esta função precisará aceitar um argumento, n, representando o número final. Em seguida, ele precisará chamar a si mesmo 
com valores progressivamente menores de n até atingir 1. Você pode escrever a função da seguinte maneira:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]


À primeira vista, isso parece contra-intuitivo, pois o valor de n diminui, mas os valores na matriz final estão aumentando.
Isso acontece porque o push acontece por último, após o retorno da chamada recursiva. No ponto em que n é colocado na matriz,
a contagem (n - 1) já foi avaliada e retornada [1, 2, ..., n - 1].

Definimos uma função chamada contagem regressiva com um parâmetro (n). A função deve usar recursão para retornar uma matriz
contendo os inteiros de n a 1 com base no parâmetro n. Se a função for chamada com um número menor que 1, ela deve retornar
uma matriz vazia. Por exemplo, chamar esta função com n = 5 deve retornar a matriz [5, 4, 3, 2, 1]. Sua função deve usar
recursão chamando a si mesma e não deve usar loops de qualquer tipo. */

// Only change code below this line
var arr = [];
function countdown(n){
    if( n <= 0){
        return arr;
    }else{
        arr.push(n);
        n--;
        countdown(n);
        return arr;
    }
  }
 