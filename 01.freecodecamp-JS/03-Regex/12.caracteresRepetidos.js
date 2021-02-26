/* Corresponder caracteres que ocorrem uma ou mais vezes

Às vezes, você precisa combinar um caractere (ou grupo de caracteres) que aparece uma ou mais vezes consecutivas.
Isso significa que ocorre pelo menos uma vez e pode ser repetido.

Você pode usar o caractere + para verificar se é esse o caso. Lembre-se de que o caractere ou padrão deve estar 
presente consecutivamente. Ou seja, o personagem deve repetir um após o outro.

Por exemplo, /a+/g encontraria uma correspondência em "abc" e retornaria ["a"]. Por causa do +, ele também encontraria 
uma única correspondência em "aabc" e retornaria ["aa"].

Se, em vez disso, estivesse verificando a string "abab", encontraria duas correspondências e retornaria ["a", "a"]
porque os caracteres a não estão em uma linha - há um b entre eles. Finalmente, como não há "a" na string "bcd",
ele não encontraria uma correspondência.

Você deseja encontrar correspondências quando a letra 's' ocorre uma ou mais vezes no "Mississippi".
Escreva uma regex que use o sinal +. */


let difficultSpelling = "Mississippi";
let myRegex = /s+/ig;
let result = difficultSpelling.match(myRegex);
console.log(result);