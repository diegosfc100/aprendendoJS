/* Múltiplas opções idênticas em declarações de switch.

Se a instrução break for omitida do caso de uma instrução switch, a(s) instrução(ões) case(s) a seguir serão executadas
até que uma quebra seja encontrada. Se você tiver várias entradas com a mesma saída, poderá representá-las em uma instrução
switch como esta: */

var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}


/* Casos para 1, 2 e 3 produzirão o mesmo resultado.

Escreva uma declaração switch para definir a resposta para os seguintes intervalos:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

Nota
Você precisará ter uma declaração de caso para cada número no intervalo.

EXERCÍCIO RESOLVIDO ABAIXO: */ 


function sequentialSizes(val) {
  var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
    }
  return answer;
}

sequentialSizes(1);