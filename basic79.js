/* Cartas de contagem

No jogo de cassino Blackjack, um jogador pode ganhar uma vantagem sobre a casa mantendo o controle do número relativo
de cartas altas e baixas restantes no baralho. Isso é chamado de contagem de cartas.

Ter mais cartas altas restantes no baralho favorece o jogador. Cada cartão recebe um valor de acordo com a tabela abaixo.
Quando a contagem é positiva, o jogador deve apostar alto. Quando a contagem é zero ou negativa, o jogador deve apostar baixo.

Count Change	 Cards
+1	             2, 3, 4, 5, 6
0	             7, 8, 9
-1	             10, 'J', 'Q', 'K', 'A'

Você escreverá uma função de contagem de cartas. Ele receberá um parâmetro do cartão, que pode ser um número ou string, 
e aumentará ou diminuirá a variável de contagem global de acordo com o valor do cartão (veja a tabela). 
A função irá então retornar uma string com a contagem atual e a string Bet se a contagem for positiva, ou Hold se a contagem
for zero ou negativa. A contagem atual e a decisão do jogador (aposta ou espera) devem ser separadas por um único espaço.

Exemplo de saída:
-3 Hold
5 Bet

Dica:

NÃO redefina a contagem para 0 quando o valor for 7, 8 ou 9.
NÃO retorne uma matriz.
NÃO inclua aspas (simples ou duplas) na saída.

EXERCÍCIO RESOLVIDO ABAIXO: */

var count = 0;

function cc(card) {
  // Only change code below this line
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
    }
if(count > 0){
    return count + " Bet"
}else{
    return count + " Hold"
}
  
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');