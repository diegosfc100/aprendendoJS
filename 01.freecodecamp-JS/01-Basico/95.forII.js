/* Iterar números ímpares com um loop for

Os loops For não precisam iterar um de cada vez. Mudando nossa expressão final, podemos contar por números pares.

Começaremos em i = 0 e fazer um loop enquanto i <10. Incrementaremos i em 2 cada loop com i + = 2.

var ourArray = [];
for (var i = 0; i <10; i += 2) {
   ourArray.push (i);
}

ourArray agora conterá [0,2,4,6,8]. Vamos mudar nossa inicialização para que possamos contar por números ímpares.

Empurre os números ímpares de 1 a 9 para myArray usando um loop for. */

var myArray = [];

for( var i = 1; i <= 9; i +=2){
    myArray.push(i);
}

console.log(myArray);