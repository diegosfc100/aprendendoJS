/* Use * para importar tudo de um arquivo.

Suponha que você tenha um arquivo e deseja importar todo o seu conteúdo para o arquivo atual.
Isso pode ser feito com a sintaxe import *. Aqui está um exemplo em que o conteúdo de um arquivo
denominado math_functions.js é importado para um arquivo no mesmo diretório: */

import * as myMathModule from "./math_functions.js";

/* A instrução de importação acima criará um objeto chamado myMathModule. Este é apenas um nome de variável,
você pode nomeá-lo de qualquer maneira. O objeto conterá todas as exportações de math_functions.js nele, 
para que você possa acessar as funções como faria com qualquer outra propriedade do objeto. 
Veja como você pode usar as funções de adição e subtração que foram importadas: */

myMathModule.add(2,3);
myMathModule.subtract(5,3);

/* O código neste arquivo requer o conteúdo do arquivo: string_functions.js, que está no mesmo diretório
que o arquivo atual. Use import * como sintaxe para importar tudo do arquivo para um objeto chamado stringFunctions. */

import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");