/* Corresponder a todos os não-números

O último desafio mostrou como pesquisar dígitos usando o atalho \d com d minúsculo.
Você também pode pesquisar por não dígitos usando um atalho semelhante que usa um D maiúsculo.

O atalho para procurar caracteres não-dígitos é \D. Isso é igual à classe de caracteres [^ 0-9],
que procura um único caractere que não seja um número entre zero e nove.

Use a classe de caracteres abreviados para não dígitos \D para contar quantos não dígitos existem nos títulos de filmes. */

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

