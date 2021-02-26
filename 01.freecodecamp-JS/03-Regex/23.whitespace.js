/* Corresponder ao espaço em branco

Os desafios até agora cobriram a correspondência de letras do alfabeto e números. 
Você também pode combinar o espaço em branco ou espaços entre as letras.

Você pode pesquisar por espaços em branco usando \s, que é um s minúsculo. 
Este padrão não corresponde apenas ao espaço em branco, mas também ao retorno de carro, tabulação, avanço de formulário
e caracteres de nova linha. Você pode pensar nisso como semelhante à classe de caracteres [\r \t \f \n \v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]


// Altere o regex countWhiteSpace para procurar vários caracteres de espaço em branco em uma string.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g
let result = sample.match(countWhiteSpace);