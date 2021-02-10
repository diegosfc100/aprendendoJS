/* Reutilizar código JavaScript usando importação

import permite que você escolha quais partes de um arquivo ou módulo carregar. Na lição anterior, os exemplos exportados
são adicionados do arquivo math_functions.js. Veja como você pode importá-lo para usar em outro arquivo: */

import {add} from './math_functions.js';

/* Aqui, import encontrará add em math_functions.js, importará apenas aquela função para você usar e ignorará o resto.
O ./ diz à importação para procurar o arquivo math_functions.js na mesma pasta do arquivo atual.
O caminho relativo do arquivo (./) e a extensão do arquivo (.js) são necessários ao usar a importação dessa maneira.

Você pode importar mais de um item do arquivo, adicionando-os na declaração de importação desta forma: */

import {add, subtract } from './math_functions.js';

/*Adicione a instrução de importação apropriada que permitirá que o arquivo atual use as funções uppercaseString
e lowercaseString que você exportou na lição anterior. Essas funções estão em um arquivo denominado string_functions.js,
que está no mesmo diretório do arquivo atual. */

  
import{uppercaseString, lowercaseString} from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");