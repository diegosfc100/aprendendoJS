/* Comparações com a lógica e o operador.

Às vezes, você precisará testar mais de uma coisa por vez. O operador lógico e (&&) retorna verdadeiro se e somente se
os operandos à esquerda e à direita dele forem verdadeiros. 

Só retornará "Sim" se num for maior que 5 e menor que 10. A mesma lógica pode ser escrita como: */
var num = 10
if (num > 5 && num < 10) {
   return "Sim"; }
return "Não";
 
/* Substitua as duas instruções if por uma instrução, usando o operador &&, que retornará "Sim" se val for menor ou igual a 50
e maior ou igual a 25. Caso contrário, retornará "Não".

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function testLogicalAnd(val){
    // Only change code below this line
  
    if(val <= 50 && val >= 25){
        return "Yes"
    }return "No"
}

testLogicalAnd(10);