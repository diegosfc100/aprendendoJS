/* Especifique o número exato de correspondências

Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando chaves.
Às vezes, você deseja apenas um número específico de correspondências.

Para especificar um certo número de padrões, basta ter aquele número entre as chaves.

Por exemplo, para combinar apenas a palavra "hah" com a letra 'a' 3 vezes, sua regex seria /ha{3}h/  */

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false


// Altere o regex timRegex para corresponder à palavra "Madeira" somente quando ela tiver quatro letras m.