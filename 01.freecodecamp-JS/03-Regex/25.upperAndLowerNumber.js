/* Especifique o número superior e inferior de correspondências

Lembre-se de que você usa o sinal de mais + para procurar um ou mais caracteres e o asterisco * 
para procurar zero ou mais caracteres. Eles são convenientes, mas às vezes você deseja corresponder a uma determinada
gama de padrões.

Você pode especificar o número inferior e superior de padrões com especificadores de quantidade. Os especificadores de 
quantidade são usados com chaves ({e}). Você coloca dois números entre as chaves - para o número inferior e superior de
padrões.

Por exemplo, para corresponder apenas à letra a que aparece entre 3 e 5 vezes na string "ah", sua regex seria
 /a{3,5}h/. */

 let A4 = "aaaah";
 let A2 = "aah";
 let multipleA = /a{3,5}h/;
 multipleA.test(A4); // Returns true
 multipleA.test(A2); // Returns false
 
//Altere o regex ohRegex para corresponder à frase inteira "Oh no" somente quando ele tiver de 3 a 6 letras h.

