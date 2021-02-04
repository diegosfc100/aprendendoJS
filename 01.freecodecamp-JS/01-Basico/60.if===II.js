/* Pratique comparar valores diferentes.

Nos últimos dois desafios, aprendemos sobre o operador de igualdade (==) e o operador de igualdade estrita (===).
Vamos fazer uma revisão rápida e praticar o uso desses operadores um pouco mais.

Se os valores comparados não forem do mesmo tipo, o operador de igualdade realizará uma conversão de tipo e,
em seguida, avaliará os valores. No entanto, o operador de igualdade estrita comparará o tipo de dados e o valor 
no estado em que se encontram, sem converter um tipo no outro.

3 == '3' // retorna verdadeiro porque o JavaScript realiza a conversão de tipo de string para número
3 === '3' // retorna falso porque os tipos são diferentes e a conversão de tipo não é realizada

Nota:
Em JavaScript, você pode determinar o tipo de uma variável ou valor com o operador typeof, da seguinte maneira:

typeof 3 // retorna 'número'
typeof '3' // retorna 'string'

A função compareEquality no editor compara dois valores usando o operador de igualdade.
Modifique a função para que ela retorne "Igual" apenas quando os valores forem estritamente iguais.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");


  //

  function compare(x, y){
    if (x === y){
      return "Igual.";
    }
     return "Diferente."
  }

console.log(compare(500,'500'));