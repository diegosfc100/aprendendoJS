/* Usando o método de teste

Expressões regulares são usadas em linguagens de programação para combinar partes de strings.
Você cria padrões para ajudá-lo a fazer essa correspondência.

Se quiser encontrar a palavra "the" na string "The dog chased the cat", você pode usar a seguinte expressão regular:
 /the/. Observe que as aspas não são necessárias na expressão regular.

JavaScript possui várias maneiras de usar regexes. Uma maneira de testar uma regex é usar o método .test(). 
O método .test() pega a regex, aplica-a a uma string (que é colocada entre parênteses) e retorna verdadeiro ou falso
se seu padrão encontrar algo ou não. */

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true

// Aplique o regex myRegex na string myString usando o método .test().

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);