// FALSY
    // Valor que quando convertido para booleano vira false  
    undefined
    null
    NaN
    false
    0
    -0
    ' ' ou " " // Strings vazias
  
// TRUTHY
// Valor que quando convertido para booleano vira true
    {} //objetos vazios
    [] //arrays vazios
    'strings' "não vazias"
    // todos os outros valores


// Testando
// Usando if
    var teste;
    if( /* coisa a ser testada */ ){
        teste = true;
    } else {
        teste = false;
    }
    
// Usando !!
    !!true // true
    !!'clara' // true
    !!0 // false
    !!' ' // false


// Condicional Ternário 
   // condição ? true;
   // condição : false;
   1 === 2 ? true : false; // false
   var sexo = pessoa.sexo === 'Feminino' ? 'a': 'o';

   // Escopos de variáveis
    // Global
        // Variáveis declaradas fora, podendo acessá-las em ambientes locais
        // Não utilizando a palavra chave "var" a variável será considerada Global mesmo sendo declarada localmente 
    
    // Local
        // Variáveis declaradas dentro, só estando disponível localmente
        // Variáveis locais são melhores que as globais pois ocupam menos memória.
        // Parametros de função são variáveis Locais