/* Use a função parseInt com um Radix

A função parseInt() analisa uma string e retorna um inteiro. Leva um segundo argumento para a raiz, 
que especifica a base do número na string. A raiz pode ser um número inteiro entre 2 e 36.

A chamada de função se parece com:
parseInt(string, radix);

E aqui está um exemplo:

var a = parseInt("11", 2);

A variável raiz diz que "11" está no sistema binário, ou base 2. Este exemplo converte a string "11" em um inteiro 3.

Use parseInt() na função convertToInteger para que ela converta um número binário em um inteiro e o retorne. */

function convertToInteger(str) {

    return parseInt(str, 2);

}

console.log(convertToInteger("101"));