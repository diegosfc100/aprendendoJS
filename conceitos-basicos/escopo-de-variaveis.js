var teste  = 50; // variavel Global

function somar(num1, num2){
    //variável local só é reconhecida dentro do bloco da função.
    var valor = 5; // var local
    return valor + num1 + num2;
}
console.log(valor)// ReferenceError

//

for(var i = 0; i < 5; i++){
    var outra = 5; // var global.
    console.log(i * outra);
}
console.log(outra); // temos acesso a variavel pois foi declarada num bloco for.
console.log(i); // temos acesso a variavel pois foi declarada num bloco for.

//

for(var y = 0; y < 5; y++){
    let x = 5; // var local.
    console.log(y * x);
}
console.log(x) // nesse caso tbm da erro poi variavel Let tbm é local.

// SEMPRE Q POSSÍVEL TRABALHE COM VARIAVEIS LOCAIS.