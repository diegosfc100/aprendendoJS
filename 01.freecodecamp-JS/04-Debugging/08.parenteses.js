/* Pegue a falta de abertura e fechamento do parêntese após uma chamada de função

Quando uma função ou método não aceita nenhum argumento, você pode esquecer de incluir os parênteses de abertura 
e fechamento (vazios) ao chamá-lo. Freqüentemente, o resultado de uma chamada de função é salvo em uma variável 
para outro uso em seu código. Esse erro pode ser detectado registrando os valores das variáveis (ou seus tipos)
no console e vendo se um deles está definido como uma referência de função, em vez do valor esperado que a função
retorna.

As variáveis no exemplo a seguir são diferentes:

function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"

Corrija o código para que o resultado da variável seja definido como o valor retornado da chamada da função getNine. */

function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine();
console.log(result);