/* Use o operador condicional(ternário)

O operador condicional, também chamado de operador ternário, pode ser usado como uma expressão if-else de uma linha.

A sintaxe é: 

condition ? expression-if-true : expression-if-false;

A função a seguir usa uma instrução if-else para verificar uma condição: */

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

//Isso pode ser reescrito usando o operador condicional:

function findGreater (a, b) {
   return a > b ? "a é maior": "b é maior";
}

/* Use o operador condicional na função checkEqual para verificar se dois números são iguais ou não.
A função deve retornar "Equal" ou "Not Equal". */

function checkEqual(a, b) {
    return a === b ? "Equal": "Not Equal"
}

checkEqual(1, 2);