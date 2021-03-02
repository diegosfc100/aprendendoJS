/* Pegue parênteses não fechados, colchetes, colchetes e aspas

Outro erro de sintaxe a ser observado é que todos os parênteses de abertura, colchetes, chaves e aspas
têm um par de fechamento. O esquecimento de uma parte tende a acontecer quando você está editando um código existente
e inserindo itens com um dos tipos de par. Além disso, tome cuidado ao aninhar blocos de código em outros, como adicionar 
uma função de retorno de chamada como um argumento para um método.

Uma maneira de evitar esse erro é, assim que o caractere de abertura for digitado, incluir imediatamente a correspondência
de fechamento, mover o cursor de volta entre eles e continuar a codificação. Felizmente, a maioria dos editores de código
modernos gera a segunda metade do par automaticamente.

Corrija os dois erros de pares no código. */

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
