/* Retorne um valor de uma função com retorno.

Podemos passar valores para uma função com argumentos. Você pode usar uma instrução de retorno para enviar um valor de volta
de uma função.

Exemplo: */

function plusThree(num) {
   return num + 3;
}
var answer = plusThree(5); // 8

/* plusThree recebe um argumento para num e retorna um valor igual a num + 3.

Crie uma função timesFive que aceita um argumento, multiplica-o por 5 e retorna o novo valor.
EXERCÍCIO RESOLVIDO ABAIXO: */ 

function timesFive(num1){
    return num1 * 5
}

//

function idade(anoAtual, anoDeNascimento){
    return anoAtual - anoDeNascimento
}

var minhaIdade = idade(2021,1990); // varialvel ira receber como valor uma função.

console.log(minhaIdade);