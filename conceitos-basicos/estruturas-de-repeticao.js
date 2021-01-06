// FOR
// (variável de controle; condição de parada/loop; incremento)

for(var i = 0; i <= 10; i++){ // enquanto 'i' for menor ou igual a 10..
    console.log(i); // imprima 'i'
}

// WHILE
// primeiro ele faz a checagem e depois ele executa.

var numero = 0

while(numero <= 10){ // enquanto var 'numero' for menor ou igual a 10..
    console.log(numero); // imprima 'numero'
    numero++; // incrementa 'numero'
}

// DO-WHILE
// primeiro ele exercuta e depois ele checa.

var cont = 10;

do{ //faça..
    console.log('Imprime o valor do cont:' + cont);
    cont++;
}while(cont <= 5);
