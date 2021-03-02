/* Capture o uso do operador de atribuição em vez do operador de igualdade

Programas de ramificação, ou seja, aqueles que fazem coisas diferentes se certas condições forem atendidas,
contam com instruções if, else if e else em JavaScript. A condição às vezes assume a forma de testar se um resultado
é igual a um valor.

Essa lógica é falada (em inglês, pelo menos) como "se x for igual a y, então ...", que pode ser traduzido literalmente 
em código usando =, ou operador de atribuição. Isso leva a um fluxo de controle inesperado em seu programa.

Conforme abordado nos desafios anteriores, o operador de atribuição (=) em JavaScript atribui um valor a um nome de
variável. E os operadores == e === verificam a igualdade (o triplo === testa a igualdade estrita, o que significa que
o valor e o tipo são iguais).

O código a seguir atribui x como 2, que é avaliado como verdadeiro. Quase todo valor sozinho em JavaScript é
avaliado como verdadeiro, exceto os conhecidos como valores "falsy": false, 0, "" (uma string vazia), NaN, undefined
e Null.

let x = 1;
let y = 2;
if (x = y) {
  // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
  // this code block is what should run (but won't) in this example
}


Corrija a condição para que o programa execute a ramificação certa e o valor apropriado seja atribuído ao resultado. */

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);