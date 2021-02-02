/* Use a função parseInt

A função parseInt() analisa uma string e retorna um inteiro. Aqui está um exemplo:

var a = parseInt ("007");

A função acima converte a string "007" em um inteiro 7. Se o primeiro caractere da string não puder ser convertido em um
número, ele retornará NaN.

Use parseInt() na função convertToInteger para que ela converta a string de entrada str em um inteiro e a retorne. */

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");