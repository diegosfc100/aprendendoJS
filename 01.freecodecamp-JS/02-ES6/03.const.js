/* Declare uma variável somente leitura com a palavra-chave const

A palavra-chave let não é a única nova maneira de declarar variáveis. No ES6, você também pode declarar variáveis ​​usando
a palavra-chave const.

const tem todos os recursos incríveis que permite, com a vantagem adicional de que as variáveis ​​declaradas usando const
são somente leitura. Eles são um valor constante, o que significa que uma vez que uma variável é atribuída com const,
ela não pode ser reatribuída.

const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error


Como você pode ver, tentar reatribuir uma variável declarada com const gerará um erro. Você deve sempre nomear variáveis
​​que não deseja reatribuir usando a palavra-chave const. Isso ajuda quando você acidentalmente tenta reatribuir uma variável
que deveria permanecer constante. Uma prática comum ao nomear constantes é usar todas as letras maiúsculas,
com palavras separadas por um sublinhado.

Nota: É comum para desenvolvedores usar identificadores de variáveis ​​em maiúsculas para valores imutáveis ​​e minúsculas 
ou camelCase para valores mutáveis ​​(objetos e matrizes). Em um desafio posterior, você verá um exemplo de um identificador
de variável em minúsculas sendo usado para um array.

Altere o código para que todas as variáveis ​​sejam declaradas usando let ou const.
Use let quando quiser que a variável mude e const quando quiser que a variável permaneça constante. 
Além disso, renomeie as variáveis ​​declaradas com const para ficar em conformidade com as práticas comuns,
 o que significa que as constantes devem estar em maiúsculas. */

  function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");