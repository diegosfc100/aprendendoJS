/* Extrair correspondências

Até agora, você só verificou se um padrão existe ou não dentro de uma string.Você também pode extrair as correspondências
reais encontradas com o método .match().

Para usar o método .match(), aplique o método em uma string e passe a regex entre parênteses. */

"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

//Observe que a sintaxe .match é o "oposto" do método .test que você tem usado até agora:

'string'.match(/regex/); //.match()
/regex/.test('string'); //.test()


//Aplique o método .match() para extrair a palavra 'coding'.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line