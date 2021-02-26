/* Corresponder caracteres que ocorrem zero ou mais vezes

O último desafio usou o sinal de mais + para procurar caracteres que ocorrem uma ou mais vezes.
Também há uma opção que combina caracteres que ocorrem zero ou mais vezes.

O caractere para fazer isso é o asterisco ou estrela: *. 
*/


let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null


/* Para este desafio, chewieQuote foi inicializado como "Aaaaaaaaaaaaaaaarrrgh!" Por trás das cenas.
Crie um chewieRegex regex que use o caractere * para corresponder a um caractere "A" maiúsculo imediatamente
seguido por zero ou mais caracteres "a" minúsculos em chewieQuote. Sua regex não precisa de sinalizadores ou
classes de caracteres e não deve corresponder a nenhuma das outras aspas. */

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
console.log(result);