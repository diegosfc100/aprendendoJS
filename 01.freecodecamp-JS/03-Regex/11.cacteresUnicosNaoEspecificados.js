/* Corresponder a caracteres únicos não especificados

Até agora, você criou um conjunto de caracteres que deseja combinar, mas também pode criar um conjunto de caracteres 
que não deseja combinar. Esses tipos de conjuntos de caracteres são chamados de conjuntos de caracteres negados.

Para criar um conjunto de caracteres negado, coloque um caractere circunflexo (^) após o colchete de abertura e antes 
dos caracteres que você não deseja corresponder.

Por exemplo, /[^aeiou]/gi corresponde a todos os caracteres que não são vogais.
Observe que caracteres como ., !, [, @, / e espaço em branco são combinados - o conjunto de caracteres de vogal negado 
exclui apenas os caracteres de vogal.

Crie uma única regex que corresponda a todos os caracteres que não sejam um número ou vogal.
Lembre-se de incluir os sinalizadores apropriados na regex. */

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; 
let result = quoteSample.match(myRegex);

console.log(result);