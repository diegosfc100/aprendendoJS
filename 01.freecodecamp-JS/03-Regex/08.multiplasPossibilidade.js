/* Combine um único personagem com múltiplas possibilidades

Você aprendeu como combinar padrões literais (/literal/) e caractere curinga (/./). 
Esses são os extremos das expressões regulares, onde uma encontra correspondências exatas e a outra combina com tudo.
Existem opções que são um equilíbrio entre os dois extremos.

Você pode pesquisar um padrão literal com alguma flexibilidade com classes de caracteres.
As classes de caracteres permitem que você defina um grupo de caracteres que deseja combinar, 
colocando-os entre colchetes ([e]).

Por exemplo, você deseja combinar "bag", "big" e "bug", mas não "bog". Você pode criar o regex / b[aiu]g/ 
para fazer isso. O [aiu] é a classe de caracteres que corresponderá apenas aos caracteres "a", "i" ou "u". */

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null


/* Use uma classe de caracteres com vogais (a, e, i, o, u) em seu regex vowelRegex para encontrar todas as vogais
na string quoteSample.

Observação: Certifique-se de combinar as vogais maiúsculas e minúsculas. */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 


