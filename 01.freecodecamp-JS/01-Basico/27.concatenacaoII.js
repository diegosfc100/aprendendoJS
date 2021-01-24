/* Concatenando Strings com o Operador Plus Equals

Também podemos usar o operador += para concatenar uma string no final de uma variável de string existente.
Isso pode ser muito útil para quebrar uma corda longa em várias linhas.

Nota:       
Cuidado com os espaços. A concatenação não adiciona espaços entre as strings concatenadas,
portanto, você mesmo precisará adicioná-los.

Exemplo: */

var ourStr = "Eu venho primeiro.";
ourStr += "Eu venho em segundo lugar.";
// ourStr agora é "Eu venho primeiro. Eu venho em segundo lugar."

/* Construa myStr em várias linhas, concatenando estas duas strings:
"This is the first sentence. " e "This is the second sentence." usando o operador +=.
Use o operador += semelhante ao que é mostrado no editor. Comece atribuindo a primeira string a myStr e,
em seguida, adicione a segunda string. 

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

//

var educacao = "Bom Dia, "
educacao += "Boa Tarde, ";
educacao += "Boa Noite. ";

console.log(educacao);