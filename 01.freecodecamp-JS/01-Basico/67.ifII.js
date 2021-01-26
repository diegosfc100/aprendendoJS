/* Comparações com o operador lógico ou.

O operador lógico ou (||) retorna verdadeiro se qualquer um dos operandos for verdadeiro. Caso contrário, retorna falso.

O operador lógico ou é composto de dois símbolos de barra vertical: ||
Isso normalmente pode ser encontrado entre as teclas Backspace e Enter.

O padrão abaixo deve parecer familiar de pontos de referência anteriores:

if (num > 10) {
   retornar "Não";
}
if (num < 5) {
   retornar "Não";
}
retornar "Sim";

retornará "Sim" somente se num estiver entre 5 e 10 (5 e 10 incluídos). A mesma lógica pode ser escrita como:

if (num > 10 || num < 5) {
   retornar "Não";
}
retornar "Sim";

Combine as duas instruções if em uma instrução que retorna "Outside" se val não estiver entre 10 e 20, inclusive.
 Caso contrário, retorne "Inside".

 EXERCÍCIO RESOLVIDO ABAIXO: */ 


 function testLogicalOr(val) {
    // Only change code below this line
  
   if(val < 10 || val > 20){
       return "Outside"
   } return "Inside"
}
console.log(testLogicalOr(15));