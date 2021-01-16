/* Fugindo de citações literais em cordas

Ao definir uma string, você deve começar e terminar com aspas simples ou duplas. 
O que acontece quando você precisa de uma citação literal: "ou 'dentro de sua string?

Em JavaScript, você pode escapar de uma citação ao considerá-la como um fim de citação
de string colocando uma barra invertida (\) na frente da citação. */

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

/* 
Isso sinaliza ao JavaScript que a citação a seguir não é o fim da string, mas deve aparecer
dentro da string. Portanto, se você imprimir isso no console, obterá:

Alan disse: Alan said, "Peter is learning JavaScript".

Use barras invertidas para atribuir uma string à variável myStr para que se você fosse imprimi-la no console, você veria:

I am a "double quoted" string inside "double quotes".

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."