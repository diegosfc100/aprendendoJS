/* Match Ending String Patterns

No último desafio, você aprendeu a usar o caractere circunflexo para pesquisar padrões no início de strings.
Também existe uma maneira de pesquisar padrões no final das strings.

Você pode pesquisar o final das strings usando o caractere de cifrão $ no final da regex. */

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false

//Use o caractere âncora ($) para corresponder à string "caboose" no final do caboose da string.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
console.log(result);