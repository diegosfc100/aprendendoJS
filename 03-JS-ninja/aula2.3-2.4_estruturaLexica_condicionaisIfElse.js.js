// ESTRUTURA LÉXICA

    // Identificadores
    // JS é Casesensitive, ou seja, diferencia maiusculas de minusculas.
    var animal = 'Gato';
    var Animal = 'Cachorro';
    console.log()

    // Nomes para variáveis e funções
    // podem iniciar com ..
        "_" , "$" , "letras de 'a' a 'z'" , "letras de 'A' a 'Z'"
    // podem conter ..
        "_" , "$" , "letras de 'a' a 'z'" , "letras de 'A' a 'Z'" , "digitos de 0 a 9"
        
        
        
// CONDICIONAIS
    // IF
    /* if(se isso for verdadeiro){
        faça isso
    } */
    
    // ELSE
    /*else{
        Se o if não acontecer, faça isso..
    } */

    // ELSE IF
    /*else if (próxima condição) {
        É a próxima condição se o if for falso antes de acontecer o else. Pode ser usado quantas vezes quiser. 
    } */

    function teste(idade){
        if(idade >= 18){
            return 'Maior de Idade'
        }else if(idade >= 15 && idade < 18){
            return "Adolescente e Menor de Idade"
        }else{
            return 'Criança'
        }
    }

    console.log(teste(18));