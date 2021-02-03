/* Use o parâmetro rest com parâmetros de função

Para nos ajudar a criar funções mais flexíveis, o ES6 introduz o parâmetro rest para os parâmetros de função.
Com o parâmetro rest, você pode criar funções que usam um número variável de argumentos.
Esses argumentos são armazenados em uma matriz que pode ser acessada posteriormente de dentro da função. */

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
  console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
  

/* O parâmetro rest elimina a necessidade de verificar o array args e nos permite aplicar map(), filter() e reduce()
no array de parâmetros.

Modifique a função sum usando o parâmetro rest de forma que a função sum seja capaz de receber qualquer número de argumentos
e retornar sua soma. */

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }