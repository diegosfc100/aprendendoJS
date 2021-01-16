/* Compreendendo o valor indefinido retornado de uma função.

Uma função pode incluir a instrução de retorno, mas não é necessário. Caso a função não tenha um comando return,
quando você a chama, a função processa o código interno, mas o valor retornado é indefinido.

Exemplo: */

var sum = 0;

function addSum(num) {
   sum = sum + num;
}
addSum(3); // a soma será modificada, mas o valor retornado é indefinido

/* addSum é uma função sem uma instrução de retorno. A função mudará a variável de soma global,
mas o valor retornado da função é indefinido.

Crie uma função addFive sem nenhum argumento. Esta função adiciona 5 à variável sum, mas seu valor retornado é indefinido.
EXERCÍCIO RESOLVIDO ABAIXO: */ 

var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
    sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();