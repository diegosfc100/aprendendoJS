/* Gerar números inteiros aleatórios dentro de um intervalo

Em vez de gerar um número inteiro aleatório entre zero e um determinado número, como fizemos antes,
podemos gerar um número inteiro aleatório que se enquadre em um intervalo de dois números específicos.

Para fazer isso, vamos definir um número mínimo min e um número máximo max.

Aqui está a fórmula que usaremos. Reserve um momento para lê-lo e tente entender o que este código está fazendo: */

Math.floor(Math.random() * (max - min + 1)) + min

/*Crie uma função chamada randomRange que leva um intervalo myMin e myMax e retorna um número inteiro aleatório 
que é maior ou igual a myMin e é menor ou igual a myMax, inclusive. */

function randomRange(myMin, myMax) {

   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}