/* Gerar frações aleatórias com JavaScript

Os números aleatórios são úteis para criar um comportamento aleatório.
JavaScript tem uma função Math.random() que gera um número decimal aleatório entre 0 (inclusivo)
e não exatamente até 1 (exclusivo). Assim, Math.random () pode retornar um 0, mas nunca retornar um 1.

Nota
Como no armazenamento de valores com o operador igual, todas as chamadas de função serão resolvidas antes
da execução do retorno, portanto, podemos retornar o valor da função Math.random().

Altere randomFraction para retornar um número aleatório em vez de retornar 0. */

function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }