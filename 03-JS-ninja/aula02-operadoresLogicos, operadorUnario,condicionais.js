// OPERADORES LÓGICOS:
    var x = 3, y = 4;

    // && Operador "and"
    x == 3 && y == 4

    // || Operador "or"
    x == 3 || y == 4 

    // ! Operador "not"
    x !== 3 // false
    x !== '3' // true
    
    
    
// OPERADOR UNARIO
    // usado para converter em número variáveis que são NaN
    +'3' // 3
    +'Diego' // NaN

    // usado para concatenação, sempre que tiver um + somando uma string ele irá retornar uma concatenação
        'cla' + 'ra' // 'clara'
        '3' + 3 // '33'

    // Inversor de sinal
    var a = '5'
    -a // -5
    
    
    
// ESTRUTURA LÉXICA

    // Identificadores
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