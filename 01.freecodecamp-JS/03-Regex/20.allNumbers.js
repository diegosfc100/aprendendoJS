/*Corresponder a todos os números

Você aprendeu atalhos para padrões de string comuns, como alfanuméricos. Outro padrão comum é procurar apenas dígitos
ou números.

O atalho para procurar caracteres de dígitos é \d, com d minúsculo. Isso é igual à classe de caracteres [0-9],
que procura um único caractere de qualquer número entre zero e nove.

Use a classe de caracteres abreviados \d para contar quantos dígitos existem nos títulos dos filmes.
Os números escritos ("seis" em vez de 6) não contam. */

let numString = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;
console.log(result);