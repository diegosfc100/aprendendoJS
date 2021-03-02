/* Evite loops infinitos com uma condição terminal válida

O tópico final é o temido loop infinito. Os loops são ótimas ferramentas quando você precisa que seu programa execute
um bloco de código um certo número de vezes ou até que uma condição seja atendida, mas eles precisam de uma condição
terminal que encerre o loop. Os loops infinitos podem congelar ou travar o navegador e causar um caos geral na execução
do programa, o que ninguém quer.

Houve um exemplo de um loop infinito na introdução a esta seção - ele não tinha nenhuma condição terminal para sair do
loop while dentro de loopy(). NÃO chame esta função!

function loopy () {
  while (true) {
    console.log ("Olá, mundo!");
  }
}

É trabalho do programador garantir que a condição do terminal, que diz ao programa quando sair do código de loop,
seja eventualmente alcançada. Um erro é aumentar ou diminuir uma variável do contador na direção errada da condição
do terminal. Outro está redefinindo acidentalmente um contador ou variável de índice dentro do código de loop,
em vez de incrementá-lo ou decrementá-lo.

A função myFunc() contém um loop infinito porque a condição terminal i! = 4 nunca será avaliada como falsa 
(e interromperá o loop) - i aumentará 2 a cada passagem e pulará para 4, pois i é estranho para começar.
Fixe o operador de comparação na condição do terminal para que o loop execute apenas para i menor ou igual a 4. */

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

console.log(myFunc());