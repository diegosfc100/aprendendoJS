/* Combine tudo, exceto letras e números

Você aprendeu que pode usar um atalho para combinar alfanuméricos [A-Za-z0-9_] usando \w.
Um padrão natural que você pode querer pesquisar é o oposto dos alfanuméricos.

Você pode pesquisar o oposto de \w com \W. Observe que o padrão oposto usa uma letra maiúscula.
Este atalho é igual a [^ A-Za-z0-9_]. */

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]


// Use a classe de caracteres abreviados \W para contar o número de caracteres não alfanuméricos em várias aspas e strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);