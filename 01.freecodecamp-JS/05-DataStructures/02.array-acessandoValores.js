/* Acesse o conteúdo de uma matriz usando a notação de colchetes

A característica fundamental de qualquer estrutura de dados é, obviamente, a capacidade não apenas de armazenar dados,
mas também de recuperá-los sob comando. Então, agora que aprendemos como criar um array, vamos começar a pensar sobre 
como podemos acessar as informações desse array.

Quando definimos um array simples como visto abaixo, existem 3 itens nele:

let nossoArray = ["a", "b", "c"];

Em uma matriz, cada item da matriz possui um índice. Este índice dobra como a posição daquele item na matriz e como
você o referencia. No entanto, é importante observar que os arrays JavaScript são indexados por zero, o que significa
que o primeiro elemento de um array está na verdade na posição zero, não o primeiro. Para recuperar um elemento de um
array, podemos colocar um índice entre colchetes e anexá-lo ao final de um array ou, mais comumente, a uma variável que
faz referência a um objeto de array. Isso é conhecido como notação de colchetes. Por exemplo, se quisermos recuperar o 
"a" de nossoArray e atribuí-lo a uma variável, podemos fazer isso com o seguinte código:

let ourVariable = ourArray[0];
// nossa variável é igual a "a"

Além de acessar o valor associado a um índice, você também pode definir um índice para um valor usando a mesma notação:

ourArray[1] = "não mais b";
// ourArray agora é igual a ["a", "não mais b", "c"];

Usando a notação de colchetes, agora redefinimos o item no índice 1 de "b" para "não mais b".

Para completar este desafio, defina a 2ª posição (índice 1) de myArray para qualquer coisa que você quiser, 
além de "b" :

let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);

*/

let myArray = ["a", "b", "c", "d"];
myArray[1] = 'bomdia'

console.log(myArray);
