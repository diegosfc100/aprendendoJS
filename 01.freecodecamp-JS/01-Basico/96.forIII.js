/* Conte para trás com um For Loop.

Um loop for também pode contar para trás, desde que possamos definir as condições corretas.

Para diminuir em dois a cada iteração, precisaremos alterar nossa inicialização, condição e expressão final.

Começaremos em i = 10 e fazer um loop enquanto i > 0. Diminuiremos i em 2 em cada loop com i -= 2.

var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}


ourArray agora conterá [10,8,6,4,2]. Vamos mudar nossa inicialização e expressão final para que possamos contar para trás
em dois por números ímpares.

Transfira os números ímpares de 9 a 1 para myArray usando um loop for. */

var myArray = [];

for(var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

console.log(myArray);