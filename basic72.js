/* Código de Golfe

No jogo de golfe, cada buraco tem um par, o que significa que o número médio de tacadas que um jogador de golfe
deve dar para enfiar a bola em um buraco para completar a jogada. Dependendo de quão acima ou abaixo do nível de
seus golpes estão, há um apelido diferente.

Sua função receberá argumentos par e strokes. Retorne a string correta de acordo com esta tabela que lista os golpes
em ordem de prioridade; de cima (mais alto) para baixo (mais baixo):

Strokes	        Return

1	            "Hole-in-one!"
<= par - 2	    "Eagle"
par - 1	        "Birdie"
par	            "Par"
par + 1	        "Bogey"
par + 2	        "Double Bogey"
>= par + 3	    "Go Home!"

par e strokes serão sempre numéricos e positivos. Adicionamos uma série de todos os nomes para sua conveniência.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if(strokes == 1){
        return names[0];
    }else if(strokes <= par - 2){
        return names[1];
    }else if(strokes == par - 1){
        return names[2];
    }else if(strokes == par){
        return names[3];
    }else if(strokes == par + 1){
        return names[4];
    }else if(strokes == par + 2){
        return names[5];
    }else if(strokes >= par + 3){
        return names[6];
    }else{
  return "Change Me";
    }
}

golfScore(5, 4);