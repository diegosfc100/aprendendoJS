/* Escreva funções de seta com parâmetros

Assim como uma função regular, você pode passar argumentos para uma função de seta. */

// doubles input value and returns it
const doubler = (item) => item * 2;
doubler(4); // returns 8


// Se uma função de seta tiver um único parâmetro, os parênteses envolvendo o parâmetro podem ser omitidos.

// a mesma função, sem os parênteses do parâmetro
const doubler = item => item * 2;

// É possível passar mais de um argumento para uma função de seta.

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8


//Reescreva a função myConcat que acrescenta o conteúdo de arr2 a arr1 para que a função use a sintaxe da função de seta.

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));