/* Explore as diferenças entre as palavras-chave var e let

Um dos maiores problemas com a declaração de variáveis ​​com a palavra-chave var é que você pode sobrescrever as declarações
de variáveis ​​sem erro.

var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'


Como você pode ver no código acima, a variável camper é originalmente declarada como James e, em seguida, substituída como 
David. Em um aplicativo pequeno, você pode não se deparar com esse tipo de problema, mas quando seu código ficar maior,
você pode substituir acidentalmente uma variável que não pretendia substituir. Como esse comportamento não gera um erro,
a pesquisa e a correção de bugs se tornam mais difíceis.
Uma nova palavra-chave chamada let foi introduzida no ES6 para resolver este problema potencial com a palavra-chave var.
Se você substituísse var por let nas declarações de variáveis ​​do código acima, o resultado seria um erro.

let campista = 'James';
let campista = 'David'; // lança um erro

Este erro pode ser visto no console do seu navegador. Portanto, ao contrário de var, ao usar let, uma variável com o mesmo 
nome só pode ser declarada uma vez. Observe o "use strict". Isso ativa o Modo estrito, que detecta erros comuns de codificação
e ações "inseguras". Por exemplo:

"use strict";
x = 3.14; // throws an error because x is not declared


Atualize o código para que ele use apenas a palavra-chave let. */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();