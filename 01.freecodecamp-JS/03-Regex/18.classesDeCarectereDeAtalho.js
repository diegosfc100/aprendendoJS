/* Corresponder a todas as letras e números

Usando classes de caracteres, você foi capaz de pesquisar todas as letras do alfabeto com [a-z]. 
Este tipo de classe de personagem é comum o suficiente para que haja um atalho para ela, embora inclua alguns 
caracteres extras também.

A classe de caractere mais próxima em JavaScript para corresponder ao alfabeto é \w. 
Este atalho é igual a [A-Za-z0-9_]. Esta classe de caractere combina letras maiúsculas e minúsculas mais números. 
Observe que essa classe de caractere também inclui o caractere de sublinhado (_). */

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true


/* Essas classes de caracteres de atalho também são conhecidas como classes de caracteres de atalho.
Use a classe de caracteres abreviados \w para contar o número de caracteres alfanuméricos em várias aspas e strings. */

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);