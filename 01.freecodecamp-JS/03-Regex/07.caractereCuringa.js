/* Corresponder qualquer coisa com o período curinga

Às vezes, você não conhece (ou não precisa) saber os caracteres exatos em seus padrões.
Pensar em todas as palavras que correspondem, digamos, a um erro ortográfico demoraria muito.
Felizmente, você pode economizar tempo usando o caractere curinga: '.'

O caractere curinga. corresponderá a qualquer um dos caracteres. O curinga também é chamado de ponto e ponto. 
Você pode usar o caractere curinga como qualquer outro caractere na regex. Por exemplo, se você deseja corresponder
 "hug", "huh", "hut" e "hum", pode usar o regex /hu./ para corresponder às quatro palavras. */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true


/* Complete a regex unRegex de forma que corresponda às strings "run", "sun", "fun", "pun", "nun" e "bun".
Seu regex deve usar o caractere curinga. */

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; 
let result = unRegex.test(exampleStr);