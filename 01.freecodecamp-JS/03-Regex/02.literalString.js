/* Combine Literal Strings

No último desafio, você procurou a palavra "Hello" usando a expressão regular /Hello/.
Essa regex procurou uma correspondência literal da string "Hello". Aqui está outro exemplo de pesquisa por uma
correspondência literal da string "Kevin": */

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true


/* Quaisquer outras formas de "Kevin" não corresponderão. Por exemplo, o regex /Kevin/ não corresponderá a
"kevin" ou "KEVIN". */

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false


/* Um desafio futuro mostrará como combinar essas outras formas também.
Complete o regex waldoRegex para encontrar "Waldo" na string waldoIsHiding com uma correspondência literal. */

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);