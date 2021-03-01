/* Verifique se há tudo ou nada

Às vezes, os padrões que você deseja pesquisar podem ter partes que podem ou não existir. 
No entanto, pode ser importante verificá-los mesmo assim.
Você pode especificar a possível existência de um elemento com um ponto de interrogação, ?. 
Isso verifica se há zero ou um dos elementos anteriores. Você pode pensar neste símbolo como se o elemento anterior
fosse opcional.

Por exemplo, existem pequenas diferenças no inglês americano e britânico e você pode usar o ponto de interrogação
para corresponder às duas grafias. */

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true


// Altere a regex favRegex para corresponder à versão em inglês americano (favourite) e em inglês britânico (favorito) da palavra.