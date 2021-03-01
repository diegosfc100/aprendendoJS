/* Use grupos de captura para pesquisar e substituir

Pesquisar é útil. No entanto, você pode tornar a pesquisa ainda mais poderosa quando ela também altera (ou substitui)
o texto que você encontrou.

Você pode pesquisar e substituir texto em uma string usando .replace() em uma string. As entradas para .replace()
são primeiro o padrão regex que você deseja pesquisar. O segundo parâmetro é a string para substituir a correspondência
ou uma função para fazer algo. */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."


// Você também pode acessar grupos de captura na string de substituição com cifrões($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"


/* Escreva um fixRegex regex usando três grupos de captura que pesquisarão cada palavra na string "one two three".
Em seguida, atualize a variável replaceText para substituir "um dois três" pela string "três dois um" e atribua o 
resultado à variável de resultado. Certifique-se de utilizar grupos de captura na string de substituição usando a
sintaxe do cifrão ($). */

let str = "one two three"
let fixRegex =/(\w+)\s(\w+)\s(\w+)/
let replaceText = "$3 $2 $1"
let result = str.replace(fixRegex, replaceText)


