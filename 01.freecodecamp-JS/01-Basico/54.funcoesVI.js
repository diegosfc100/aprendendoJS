/* Atribuição com valor devolvido.

Se você se lembra de nossa discussão sobre Armazenamento de valores com o operador de atribuição, 
tudo à direita do sinal de igual é resolvido antes que o valor seja atribuído. Isso significa que 
podemos pegar o valor de retorno de uma função e atribuí-lo a uma variável.

Suponha que tenhamos predefinido uma função de soma que adiciona dois números juntos, então: */

//ourSum = sum(5, 12);

/* irá chamar a função sum, que retorna um valor de 17 e o atribui à nossa variável sum.

Chame a função processArg com um argumento de 7 e atribua seu valor de retorno à variável processada.
EXERCÍCIO RESOLVIDO ABAIXO: */ 

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);