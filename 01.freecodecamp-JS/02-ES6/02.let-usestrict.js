/* Compare escopos de var e deixe palavras-chave

Quando você declara uma variável com a palavra-chave var, ela é declarada globalmente ou localmente se declarada dentro
de uma função.

A palavra-chave let se comporta de maneira semelhante, mas com alguns recursos extras. Quando você declara uma variável
com a palavra-chave let dentro de um bloco, instrução ou expressão, seu escopo é limitado a esse bloco, instrução ou 
expressão.

Por exemplo: */

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

/* Com a palavra-chave var, i é declarado globalmente. Portanto, quando i++ é executado, ele atualiza a variável global.
Este código é semelhante ao seguinte: */

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3


/* Esse comportamento causará problemas se você criar uma função e armazená-la para uso posterior dentro de um loop for 
que usa a variável i. Isso ocorre porque a função armazenada sempre fará referência ao valor da variável i global atualizada. */

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3


/* Como você pode ver, printNumTwo() imprime 3 e não 2. Isso ocorre porque o valor atribuído a i foi atualizado e
printNumTwo() retorna o i global e não o valor que eu tinha quando a função foi criada no loop for.
A palavra-chave let não segue este comportamento: */

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"


/* i não está definido porque não foi declarado no escopo global. Ele só é declarado na instrução de loop for.
printNumTwo() retornou o valor correto porque três variáveis ​​i diferentes com valores exclusivos (0, 1 e 2)
foram criadas pela palavra-chave let dentro da instrução de loop.

Corrija o código para que i declarado na instrução if seja uma variável separada do que i declarado na primeira linha
da função. Certifique-se de não usar a palavra-chave var em nenhum lugar do código.

Este exercício foi elaborado para ilustrar a diferença entre como var e permitir que as palavras-chave atribuam escopo 
à variável declarada. Ao programar uma função semelhante à usada neste exercício, geralmente é melhor usar nomes
 de variáveis ​​diferentes para evitar confusão. */

 function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}