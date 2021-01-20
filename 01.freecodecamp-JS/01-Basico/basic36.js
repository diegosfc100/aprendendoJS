/* Word Blanks - Espaços em branco da palavra.

Agora usaremos nosso conhecimento de strings para construir um jogo de palavras no estilo "Mad Libs" 
que chamamos de "Word Blanks". Você criará uma frase (opcionalmente bem-humorada) do estilo "Preencha os espaços em branco".

Em um jogo "Mad Libs", você recebe frases com algumas palavras faltando, como substantivos, verbos, adjetivos e advérbios.
Em seguida, você preenche as peças que faltam com palavras de sua escolha de uma forma que a frase completa faça sentido.

Considere esta frase -"It was really ____, and we ____ ourselves ____". Esta frase tem três peças faltando
- um adjetivo, um verbo e um advérbio, e podemos adicionar palavras de nossa escolha para completá-la.
Podemos então atribuir a frase completa a uma variável da seguinte maneira:

var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

Neste desafio, fornecemos um substantivo, um verbo, um adjetivo e um advérbio. Você precisa formar uma frase completa usando
palavras de sua escolha, junto com as palavras que fornecemos.

Você precisará usar o operador de concatenação de string + para construir uma nova string, usando as variáveis ​​fornecidas:
myNoun, myAdjective, myVerb e myAdverb. Em seguida, você atribuirá a string formada à variável wordBlanks.
Você não deve alterar as palavras atribuídas às variáveis.

Você também precisará levar em conta os espaços em sua string, para que a frase final tenha espaços entre todas as palavras.
O resultado deve ser uma frase completa.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "I view" + " " + myNoun + " " + "pretty and" + " " + myAdjective + " " + "and" + " " + myVerb + " " + "very"+ " " + myAdverb;
console.log(wordBlanks)