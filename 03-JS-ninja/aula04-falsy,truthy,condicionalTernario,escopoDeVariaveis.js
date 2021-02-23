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
    !!'clara' // true
    !!0 // false
    !!' ' // false
    !0 // true



// CONDICIONAL TERNÁRIO
   // condição ? true : false
   //exemplo1:
   1 === '1' ? true : false; //false
    
   //exemplo2:
   var pessoa = {
       sexo: 'Masculino'
   }

   var sexo = pessoa.sexo === 'Masculino' ? 'o' : 'a';


// ESCOPO DE VARIÁVEIS
    // Global
        // Variáveis declaradas fora, podendo acessá-las em ambientes locais
        // Não utilizando a palavra chave "var" a variável será considerada Global mesmo sendo declarada localmente 
    
    // Local
        // Variáveis declaradas dentro, só estando disponível localmente
        // Variáveis locais são melhores que as globais pois ocupam menos memória.
        // Parametros de função são variáveis Locais