/* Corresponder padrões iniciais de string

Desafios anteriores mostraram que as expressões regulares podem ser usadas para procurar uma série de correspondências.
Eles também são usados para pesquisar padrões em posições específicas em strings.

Em um desafio anterior, você usou o caractere circunflexo (^) dentro de um conjunto de caracteres para criar um conjunto
de caracteres negado na forma [^thingsThatWillNotBeMatched]. Fora de um conjunto de caracteres, o circunflexo é usado 
para pesquisar padrões no início das strings. */

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false


//Use o caractere circunflexo em uma regex para localizar "Cal" apenas no início da string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result);