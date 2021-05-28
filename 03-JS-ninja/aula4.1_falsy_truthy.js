// FALSY
    // Valor que quando convertido para booleano vira false  
    undefined
    null
    NaN
    false
    0
    -0
    // ' ' ou " "

// TRUTHY
    // Valor que quando convertido para booleano vira true
    {} //objetos vazios
    [] //arrays vazios
    'strings', "não vazias"
    true
    // todos os outros valores


    // Testando
    // usando if com valor truthy
    var teste;
    if([ ]){ 
      teste = true;
    }else{
        teste = false;
    }
    console.log(teste); //true


    // usando if com valor falsy
    var teste2;
    if(""){ 
      teste2 = true;
    }else{
        teste2 = false;
    }
    console.log(teste2); //false
    

    // Descobrindo a representação Booleana sem usar If
    // Usando !! (a lógica é, ! inverte o valor, !! inverte duas vezes ou seja, volta pro valor real.)
    !!true // true
    !!'diego' // true
    !!0 // false
    !!' ' // false
    !0 // true



