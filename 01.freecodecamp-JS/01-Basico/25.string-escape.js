/* Sequências de escape em strings

As aspas não são os únicos caracteres que podem ser escapados dentro de uma string. 
Existem dois motivos para usar caracteres de escape:

    1.Para permitir que você use caracteres que de outra forma não seria capaz de digitar, como um retorno de carro.
    2.Para permitir que você represente várias aspas em uma string sem que o JavaScript interprete mal o que você quer dizer.

Aprendemos isso no desafio anterior.

Code	Output
\'	    single quote
\"	    double quote
\\	    backslash
\n	    newline
\r	    carriage return
\t	    tab
\b	    word boundary
\f	    form feed

Observe que a própria barra invertida deve ter escape para ser exibida como uma barra invertida.

Atribua as três linhas de texto a seguir à única variável myStr usando sequências de escape.

    FirstLine
         \SecondLine
    ThirdLine

Você precisará usar sequências de escape para inserir caracteres especiais corretamente. 
Você também precisará seguir o espaçamento conforme aparece acima, sem espaços entre as sequências de escape ou palavras.

Aqui está o texto com as sequências de escape escritas.

"FirstLinenewline``tab``backslashSecondLinenewlineThirdLine"

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
//console.log(myStr)


//

var teste = "DiegoRodriguesDeOliveira\"DGO\""
//console.log(teste);
var teste = "DiegoRodriguesDeOliveira\'DGO\'"
//console.log(teste);
var teste = "DiegoRodriguesDeOliveira\\DGO"
//console.log(teste);
var teste = "Diego\nRodrigues\nDe\nOliveira\nDGO" // pula linha.
//console.log(teste);
var teste = "DiegoRodrigues\rDeOliveiraDGO"
//console.log(teste);
var teste = "Diego\tRodrigues\tDe\tOliveira\tDGO" // tab
//console.log(teste);
var teste = "DiegoRodrigues\bDeOliveiraDGO"
//console.log(teste);
var teste = "Diego\fRodrigues\fDe\fOliveira\fDGO"
console.log(teste);

