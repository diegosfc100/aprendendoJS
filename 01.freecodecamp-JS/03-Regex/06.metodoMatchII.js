/* Encontre mais do que a primeira correspondência

Até agora, você só conseguiu extrair ou pesquisar um padrão uma vez. */

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]


//Para pesquisar ou extrair um padrão mais de uma vez, você pode usar o sinalizador g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

/*Usando o regex starRegex, encontre e extraia ambas as palavras "Twinkle" da string twinkleStar.

Observação: Você pode ter vários sinalizadores em seu regex como /search/gi */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex);