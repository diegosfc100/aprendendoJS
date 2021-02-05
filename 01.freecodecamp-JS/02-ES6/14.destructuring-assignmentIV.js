/* Use Atribuição de Destruturação para Atribuir Variáveis de Matrizes

O ES6 torna a desestruturação de arrays tão fácil quanto a desestruturação de objetos.
Uma diferença chave entre o operador spread e a desestruturação do array é que o operador spread desempacota
todo o conteúdo de um array em uma lista separada por vírgulas. Conseqüentemente, você não pode selecionar ou
escolher quais elementos deseja atribuir às variáveis.

A destruição de uma matriz nos permite fazer exatamente isso: */

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2


/* A variável a é atribuída ao primeiro valor da matriz e b é atribuído ao segundo valor da matriz. 
Também podemos acessar o valor em qualquer índice em uma matriz com desestruturação usando vírgulas
para chegar ao índice desejado: */

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5


/*Use a atribuição de desestruturação para trocar os valores de a e b de modo que a receba o valor armazenado em b e b
receba o valor armazenado em a. */

let a = 8, b = 6;
[a,b] = [b,a]