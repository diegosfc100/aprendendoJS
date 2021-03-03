/* Copiar itens da matriz usando uma slice()

O próximo método que abordaremos é slice(). Em vez de modificar um array, slice() copia ou extrai um determinado número
de elementos para um novo array, deixando o array chamado intacto. slice() leva apenas 2 parâmetros -
o primeiro é o índice no qual iniciar a extração e o segundo é o índice no qual interromper a extração 
(a extração ocorrerá até, mas não incluindo o elemento neste índice). Considere isto: */

let weatherConditions = ['chuva', 'neve', 'granizo', 'granizo', 'claro'];

let todaysWeather = weatherConditions.slice (1, 3);
// todaysWeather igual a['neve', 'granizo'];
// weatherConditions ainda é igual a ['chuva', 'neve', 'granizo', 'granizo', 'claro']

/* Na verdade, criamos um novo array extraindo elementos de um array existente.
Definimos uma função, previsão, que leva um array como argumento. Modifique a função usando slice() para extrair
informações do array de argumentos e retornar um novo array que contém os elementos 'warm' e 'sunny':

function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

*/

