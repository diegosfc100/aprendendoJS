/* Corresponder letras do alfabeto

Você viu como pode usar conjuntos de caracteres para especificar um grupo de caracteres a serem correspondidos,
mas isso é muita digitação quando você precisa combinar uma grande variedade de caracteres 
por exemplo, cada letra do alfabeto). Felizmente, existe um recurso integrado que torna isso curto e simples.

Dentro de um conjunto de caracteres, você pode definir um intervalo de caracteres para combinar usando um caractere
de hífen: -

Por exemplo, para combinar letras minúsculas de a a e, você usaria [a-e]. */

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null


/* Corresponde a todas as letras na string quoteSample.
Nota: certifique-se de combinar letras maiúsculas e minúsculas. */

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 
