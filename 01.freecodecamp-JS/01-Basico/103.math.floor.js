/* Gere números inteiros aleatórios com JavaScript

É ótimo podermos gerar números decimais aleatórios, mas é ainda mais útil se usarmos para gerar números inteiros aleatórios.

     Use Math.random() para gerar um decimal aleatório.
     Multiplique esse decimal aleatório por 20.
     Use outra função, Math.floor() para arredondar o número para baixo para o número inteiro mais próximo.

Lembre-se de que Math.random() nunca pode retornar um 1 e, como estamos arredondando para baixo, é impossível obter 20. 
Essa técnica nos dará um número inteiro entre 0 e 19.

Juntando tudo, é assim que nosso código se parece: */

Math.floor(Math.random () * 20);

/*Estamos chamando Math.random(), multiplicando o resultado por 20 e, em seguida, passando o valor para a função Math.floor()
a arredondar o valor para o número inteiro mais próximo.

Use esta técnica para gerar e retornar um número inteiro aleatório entre 0 e 9. */

function randomWholeNum() {

   return Math.floor(Math.random()* 10 );
  }