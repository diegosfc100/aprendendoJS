/* Apresentando as declarações Else If.

Se você tiver várias condições que precisam ser tratadas, pode encadear as instruções if junto com as instruções else if.

if (num> 15) {
   retornar "Maior que 15";
} else if (num <5) {
   retornar "Menor que 5";
} else {
   retornar "Entre 5 e 15";
}

Converta a lógica para usar instruções else if.
EXERCÍCIO RESOLVIDO ABAIXO: */ 


function testElseIf(val) {
  if(val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else{
  return "Between 5 and 10";
}
    }

testElseIf(7);