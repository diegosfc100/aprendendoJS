/* Tenha cuidado ao reinicializar variáveis dentro de um loop

Às vezes, é necessário salvar informações, incrementar contadores ou reconfigurar variáveis em um loop. 
Um problema potencial é quando as variáveis devem ser reinicializadas e não são, ou vice-versa. 
Isso é particularmente perigoso se você redefinir acidentalmente a variável que está sendo usada para a condição
do terminal, causando um loop infinito.

Imprimir valores de variáveis com cada ciclo de seu loop usando console.log() pode descobrir um comportamento
problemático relacionado à redefinição ou falha ao redefinir uma variável.

A função a seguir deve criar uma matriz bidimensional com m linhas e n colunas de zeros. 
Infelizmente, ele não está produzindo a saída esperada porque a variável de linha não está sendo reinicializada
(definida de volta para uma matriz vazia) no loop externo. Corrija o código para que ele retorne uma matriz correta 
de zeros 3x2, que se parece com [[0, 0], [0, 0], [0, 0]]. */