/* Encontre um ou mais criminosos em uma caçada

É hora de fazer uma pausa e testar suas novas habilidades de redação de regex. Um grupo de criminosos escapou da prisão
e fugiu, mas você não sabe quantos. No entanto, você sabe que eles ficam próximos quando estão perto de outras pessoas.
Você é responsável por encontrar todos os criminosos de uma vez.

Aqui está um exemplo para revisar como fazer isso:

O regex /z+/ corresponde à letra z quando ela aparece uma ou mais vezes em uma linha.
Ele encontraria correspondências em todas as seguintes strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzzzabc"

Mas ele não encontra correspondências nas seguintes strings, pois não há caracteres da letra z:

""
"ABC"
"abcabc"

Escreva um regex greedy que encontre um ou mais criminosos dentro de um grupo de outras pessoas.
Um criminoso é representado pela letra maiúscula C. */

let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);