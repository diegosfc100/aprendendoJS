/* Manipular matrizes com shift()

pop() sempre remove o último elemento de uma matriz. E se você quiser remover o primeiro?

É aí que entra .shift(). Funciona exatamente como .pop(), exceto que remove o primeiro elemento em vez do último.

Exemplo: */

var ourArray = ["Stimpson", "J", ["gato"]];
var removedFromOurArray = ourArray.shift ();
// removedFromOurArray agora é igual a "Stimpson" e ourArray agora é igual a ["J", ["cat"]].

/* Use a função .shift() para remover o primeiro item de myArray, atribuindo o valor "shifted off" para removedFromMyArray.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift()

//

var jogadores = ["Pelé", "Romario", "R10", "Zidane", "Messi", "CR7"];
console.log(jogadores);

jogadores.shift();
console.log(jogadores);

jogadores.shift();
console.log(jogadores);

jogadores.shift();
console.log(jogadores);

jogadores.shift();
console.log(jogadores);

jogadores.shift();
console.log(jogadores);
