/* Capture o uso misto de citações simples e duplas

JavaScript permite o uso de aspas simples (') e duplas (") para declarar uma string. A decisão de qual usar geralmente
se resume à preferência pessoal, com algumas exceções.

Ter duas opções é ótimo quando uma string tem contrações ou outro pedaço de texto que está entre aspas. 
Apenas tome cuidado para não fechar a string muito cedo, o que causa um erro de sintaxe.

Aqui estão alguns exemplos de combinação de citações:

// Estes estão corretos:
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";

// Isso está incorreto:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';

Obviamente, não há problema em usar apenas um estilo de aspas. Você pode escapar das aspas dentro da string usando o
caractere de escape de barra invertida (\):

// Uso correto das mesmas aspas:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

Corrija a string para que use aspas diferentes para o valor href ou escape as existentes. Mantenha as aspas duplas ao
redor de toda a string. */