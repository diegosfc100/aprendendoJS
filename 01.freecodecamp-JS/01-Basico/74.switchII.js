/* Adicionando uma opção padrão nas instruções de switch.

Em uma instrução switch, você pode não ser capaz de especificar todos os valores possíveis como instruções case. 
Em vez disso, você pode adicionar a instrução padrão que será executada se nenhuma instrução case correspondente 
for encontrada. Pense nisso como a instrução else final em uma cadeia if / else.

Uma declaração padrão deve ser o último caso. */

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
default:
    defaultStatement;
    break;
}

/* Escreva uma declaração switch para definir a resposta para as seguintes condições:

"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"
EXERCÍCIO RESOLVIDO ABAIXO: */ 

function switchOfStuff(val) {
    var answer = "";
        switch(val){
            case "a":
                answer = "apple";
                break;
            case "b":
                answer = "bird";
                break;
            case "c":
                answer = "cat";
                break;
              default: // default é uma instrução padrão, parecida com else.
                answer = "stuff"  
        }   
    return answer;
  }

  switchOfStuff(1);