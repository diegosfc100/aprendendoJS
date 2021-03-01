/* Corresponder caracteres sem espaço em branco

Você aprendeu a pesquisar espaços em branco usando \s, com s minúsculo. Você também pode pesquisar tudo,
exceto espaços em branco.

Pesquise por espaços não em branco usando \S, que é um s maiúsculo. Este padrão não corresponderá a espaços em branco,
retorno de carro, tabulação, avanço de formulário e caracteres de nova linha. Você pode pensar que é semelhante à 
classe de caracteres [^\ r\ t\ f\ n\ v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32

// Altere a regex countNonWhiteSpace para procurar vários caracteres que não sejam de espaço em branco em uma string.

