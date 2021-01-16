/* Seleção de muitas opções com declarações de switch

Se você tiver muitas opções para escolher, use uma instrução switch.
Uma instrução switch testa um valor e pode ter muitas instruções case que definem vários valores possíveis.
As instruções são executadas a partir do primeiro valor de caso correspondente até que uma quebra seja encontrada.

Aqui está um exemplo de uma instrução switch: */
/*
switch(lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }
  

 os valores de caso são testados com igualdade estrita (===). A quebra diz ao JavaScript para parar de executar instruções.
Se a quebra for omitida, a próxima instrução será executada.

Escreva uma instrução switch que testa val e define a resposta para as seguintes condições:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

EXERCÍCIO RESOLVIDO ABAIXO: */ 


function caseInSwitch(val) {
  var answer = "";

  switch(val){
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;
  }
  return answer;
}
console.log(caseInSwitch(2));