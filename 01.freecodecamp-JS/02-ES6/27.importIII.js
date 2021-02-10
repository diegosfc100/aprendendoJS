/* Importar uma exportação padrão.

No último desafio, você aprendeu sobre o padrão de exportação e seus usos. Para importar uma exportação padrão,
você precisa usar uma sintaxe de importação diferente. No exemplo a seguir, add é a exportação padrão do arquivo 
math_functions.js. Aqui está como importá-lo: */

import add from "./math_functions.js";

/* A sintaxe difere em um lugar-chave. O valor importado, add, não é cercado por chaves ({}). add here é simplesmente
um nome de variável para qualquer exportação padrão do arquivo math_functions.js. Você pode usar qualquer nome aqui ao
importar um padrão.

No código a seguir, importe a exportação padrão do arquivo math_functions.js, localizado no mesmo diretório deste arquivo.
Dê à importação o nome subtract */

  
import subtract from "./math_functions.js"

subtract(7,4);