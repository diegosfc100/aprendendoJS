/* Por que usar o Let ao invés o Var ? 
1. O Let é a forma mais moderna de se declarar variaveis em JS.
2. Você irá evitar erros no seu programa.
3. Let tem escopo local. 
USE SEMPRE LET */

// o var é possivel declarar e redeclarar uma variavel ja existente, e isso é muito perigoso.
var nome = "Diego";

var nome = "José"

console.log(nome)

//usando o let isso já não é possivel, e é o adequado.

let sobrenome = "Rodrigues"
//let sobrenome = "Albuquerque" ERROR - não é possivel redeclarar

sobrenome = "Albuquerque"

console.log(sobrenome);


// CONST - usado para declarar constantes, ou seja, essa variavel vai se manter durante todo o programa, nao se altera nunca.
const serieB = 0
// serieB = 1 - ERROR  

const meuNome = "DIEGO RODRIGUES" // declarado com const por que nunca vai mudar.
let sobrenome = "OLIVEIRA" // declarado com let por que vai mudar quando eu casar.


// Mutação em constante
const santosFC = {
    libertadores: 3,
    braisleiro: 8,
    mundial:2,
    rebaixamento:0
};
console.log(santosFC);
//mutação
santosFC.libertadores = 4;
console.log(santosFC);

