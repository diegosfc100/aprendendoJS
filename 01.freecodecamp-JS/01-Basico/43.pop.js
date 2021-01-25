/* Manipular matrizes com .pop()

Outra maneira de alterar os dados em uma matriz é com a função .pop()

.pop() é usado para "retirar" um valor do final de um array. Podemos armazenar esse valor "popped off"
atribuindo-o a uma variável. Em outras palavras, .pop() remove o último elemento de uma matriz e retorna esse elemento.

Qualquer tipo de entrada pode ser "retirado" de um array - números, strings e até mesmo arrays aninhados. */

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Retorna 6
console.log(threeArr); // Retorna [1, 4]

/* Use a função .pop() para remover o último item de myArray, atribuindo o valor "popped off" a removedFromMyArray. 

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();


//

var feira = ["banana", "maça", "uva", "abacaxi"];
console.log(feira);

feira.pop();
console.log(feira)

feira.pop();
console.log(feira)

feira.pop();
console.log(feira)

