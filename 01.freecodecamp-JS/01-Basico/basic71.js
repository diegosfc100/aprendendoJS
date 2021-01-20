/* Chaining If Else Statements

instruções if / else podem ser encadeadas para lógica complexa. Aqui está o pseudocódigo de várias instruções if / else if
encadeadas: */

if (condition1) {
    statement1
  } else if (condition2) {
    statement2
  } else if (condition3) {
    statement3
  } else {
    statementN
  }
  

/* Escreva instruções if / else if encadeadas para cumprir as seguintes condições:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"

EXERCÍCIO RESOLVIDO ABAIXO: */ 


function testSize(num) {
    if(num < 5){
        return"Tiny"
    }else if(num < 10){
        return"Small"
    }else if(num < 15){
        return"Medium"
    }else if(num < 20){
        return"Large"
    }else if(num >= 20){
        return"Huge"
    } else{
  return "Change Me";
    }
}

testSize(7);