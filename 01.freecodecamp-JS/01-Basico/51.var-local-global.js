/* Escopo Global vs. Local em Funções.

É possível ter variáveis locais e globais com o mesmo nome. Ao fazer isso, a variável LOCAL tem precedência
sobre a variável global.

Neste exemplo: */

var someVar = "Hat";

function myFun () {
    var someVar = "Head";
    return someVar;
}
/* A função myFun retornará "Head" porque a versão local da variável está presente.

Adicione uma variável local a myOutfit para substituir o valor de outerWear por "sweater".
EXERCÍCIO RESOLVIDO ABAIXO: */ 

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater"
  
  return outerWear;
}

myOutfit();

//

var nome = "Diego"; // var global

function teste(){
  var nome = "DIEGO"; // var local
  return nome;
}

console.log(teste());