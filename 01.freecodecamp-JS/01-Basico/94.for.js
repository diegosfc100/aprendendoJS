/*Iterar com JavaScript For Loops.

Você pode executar o mesmo código várias vezes usando um loop.
O tipo mais comum de loop JavaScript é chamado de loop for porque é executado "for" um número específico de vezes.
Os loops For são declarados com três expressões opcionais separadas por ponto e vírgula:

for ([initialization]; [condition]; [final-expression])

A instrução de inicialização é executada uma vez apenas antes do início do loop. 
Normalmente é usado para definir e configurar sua variável de loop.

A instrução de condição é avaliada no início de cada iteração do loop e continuará enquanto for avaliada como verdadeira.
Quando a condição for falsa no início da iteração, a execução do loop será interrompida. Isso significa que se a condição
começar como falsa, seu loop nunca será executado.

A expressão final é executada no final de cada iteração do loop, antes da próxima verificação de condição e geralmente é
usada para aumentar ou diminuir o contador do loop.

No exemplo a seguir, inicializamos com i = 0 e iteramos enquanto nossa condição i <5 for verdadeira. Iremos incrementar i em 1 em cada iteração de loop com i ++ como nossa expressão final.

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

ourArray agora conterá [0,1,2,3,4].

Use um loop for para trabalhar para enviar os valores de 1 a 5 para myArray. */

var myArray = [];

for(var i = 1; i <= 5; i++){
    myArray.push(i);
}

console.log(myArray)