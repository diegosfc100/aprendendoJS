// Operador vírgula
var a, b = 2, c;
function myFunc(){
    var x = 0;
    return (x += 1, x); //igual à -> return x++
}

// Switch
// Condicional onde você tem vários casos
function myFunc2(x){
    switch(x){
        case 1:
            console.log('x é 1');
        break;
        case 2:
            console.log('x é 2');
        break;
        default:
            console.log('x não é nem 1 nem 2');
    }
}

// While
// estrutura de loop, fica se repetindo enquanto a condição for verdadeira.
// Enquanto [condição] for verdade, faça isso...
var counter = 0;
while(counter < 10){
    console.log(counter);
    counter++;
}
// contador decrescente
var counter2 = 10;
while(counter2--){
    console.log(counter2);
}