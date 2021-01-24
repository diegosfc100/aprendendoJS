/* Construindo Strings com Variáveis

Às vezes, você precisará construir uma string, no estilo Mad Libs. Usando o operador de concatenação (+),
você pode inserir uma ou mais variáveis em uma string que está construindo.

Exemplo: */

var ourName = "freeCodeCamp";
var ourStr = "Olá, nosso nome é" + ourName + ", como você está?";
// ourStr agora é "Olá, nosso nome é freeCodeCamp, como vai você?" 

/* Defina myName como uma string igual ao seu nome e construa myStr com myName entre as strings
"My name is " and " and I am well!"

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myName = "Diego"
var myStr = "My name is " + myName + " and I am well!"
console.log(myStr);

//

var nome = "Diego"
var idade = 30;

var nomeIdade = "Meu nome é " + nome + ", tenho " + idade + " anos."

console.log(nomeIdade)