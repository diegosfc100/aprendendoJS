/* Ignorar maiúsculas e minúsculas durante a correspondência

Até agora, você olhou para regexes para fazer correspondências literais de strings. Mas às vezes, você também pode 
querer combinar diferenças de maiúsculas e minúsculas.

Maiúsculas e minúsculas (ou às vezes letras maiúsculas) é a diferença entre letras maiúsculas e minúsculas. 
Exemplos de maiúsculas são "A", "B" e "C". Exemplos de letras minúsculas são "a", "b" e "c".

Você pode combinar os dois casos usando o que é chamado de sinalizador. Existem outros sinalizadores, mas aqui você
se concentrará no sinalizador que ignora maiúsculas e minúsculas - o sinalizador i. Você pode usá-lo anexando-o ao regex.
Um exemplo de uso desse sinalizador é /ignorecase/i. 
Este regex pode corresponder às strings "ignorecase", "igNoreCase" e "IgnoreCase".

Escreva um regex fccRegex para corresponder a "freeCodeCamp", independentemente do caso. Sua regex não deve corresponder a nenhuma
abreviatura ou variação com espaços. */

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

console.log(result)