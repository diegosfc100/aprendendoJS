/* Especifique apenas o menor número de correspondências

Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando chaves.
As vezes, você só deseja especificar o número inferior de padrões sem limite superior.

Para especificar apenas o número inferior de padrões, mantenha o primeiro número seguido por uma vírgula.

Por exemplo, para combinar apenas a string "hah" com a letra a aparecendo pelo menos 3 vezes, 
sua regex seria /ha{3,}h/.  */

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true


//Altere o regex haRegex para corresponder à palavra "Hazzah" somente quando tiver quatro ou mais letras z.