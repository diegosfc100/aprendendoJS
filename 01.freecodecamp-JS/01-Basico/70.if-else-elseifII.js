/* Ordem Lógica nas Declarações If Else.

A ordem é importante nas declarações if, else if.

A função é executada de cima para baixo, portanto, você deve ter cuidado com a instrução que vem primeiro.

Veja essas duas funções como exemplo.

Aqui está o primeiro: */

function foo(x) {
    if (x < 1) {
      return "Less than one";
    } else if (x < 2) {
      return "Less than two";
    } else {
      return "Greater than or equal to two";
    }
  }
  
// E o segundo apenas muda a ordem das declarações:

function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
  }
  

// Embora essas duas funções pareçam quase idênticas, se passarmos um número para ambas, obteremos resultados diferentes.

foo(0) // "Less than one"
bar(0) // "Less than two"

/*Altere a ordem da lógica na função para que ela retorne as instruções corretas em todos os casos.
EXERCÍCIO RESOLVIDO ABAIXO: */ 

function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);