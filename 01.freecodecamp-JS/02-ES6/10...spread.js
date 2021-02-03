/* Use o operador spread para avaliar matrizes no local

ES6 introduz o operador spread, que nos permite expandir arrays e outras expressões em lugares onde vários parâmetros 
ou elementos são esperados.

O código ES5 abaixo usa apply() para calcular o valor máximo em uma matriz:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89


Tivemos que usar Math.max.apply(null, arr) porque Math.max(arr) retorna NaN. Math.max() espera argumentos separados
 por vírgulas, mas não um array. O operador de propagação torna essa sintaxe muito melhor para ler e manter. */

//const arr = [6, 89, 3, 45];
//const maximus = Math.max (...arr); // retorna 89

/* ...arr retorna uma matriz descompactada. Em outras palavras, ele espalha o array. No entanto, o operador de propagação
só funciona no local, como em um argumento para uma função ou em um literal de array. O código a seguir não funcionará: */

//const spreaded = ...arr; // will throw a syntax error

//Copie todo o conteúdo de arr1 em outro array arr2 usando o operador spread.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);