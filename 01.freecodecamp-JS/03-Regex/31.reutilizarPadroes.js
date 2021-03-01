/* Reutilizar padrões usando grupos de captura

Alguns padrões que você procura ocorrerão várias vezes em uma string. É um desperdício repetir manualmente essa regex.
Há uma maneira melhor de especificar quando você tem várias substrings repetidas em sua string.

Você pode pesquisar substrings repetidos usando grupos de captura. Parênteses, (and), são usados ​​para localizar 
substrings repetidas. Você coloca a regex do padrão que se repetirá entre os parênteses.

Para especificar onde essa seqüência de repetição aparecerá, use uma barra invertida (\) e, em seguida, um número.
Este número começa em 1 e aumenta com cada grupo de captura adicional que você usa. Um exemplo seria \1 para
corresponder ao primeiro grupo.

O exemplo abaixo corresponde a qualquer palavra que ocorra duas vezes separada por um espaço: */

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]


/* Usar o método .match() em uma string retornará uma matriz com a string que corresponde, junto com seu grupo de captura.
Use grupos de captura em reRegex para corresponder a uma string que consiste apenas no mesmo número repetido exatamente
três vezes separado por espaços simples. */

