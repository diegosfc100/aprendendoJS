// FUNÇÕES
    function sayHi () {
        console.log('Oi')
    }
    
    sayHi()

 
    // Function Expression
    const showFood = function () {
        console.log('pizza')
    }
    
    showFood()
 
  
    // Argumentos e parâmetros
    const myFunc = function (name, lastName) {
        console.log(`Oi, ${name} ${lastName}`)
    }
    
    myFunc()
    myFunc('Hamilton', 'Silva')
  
 
    // Default parameters
    const myFunc2 = function (name = 'Estrôncio', lastName = 'Almeida') {
        console.log(`Oi, ${name} ${lastName}`)
    }
    
    myFunc2()
    myFunc2('Hamilton', 'Silva')
    myFunc2('Hamilton')
 
 
    // Retornando valores
    const double = function (number) {
        return number * 2
    }
 
    const result = double(3)
 

    const showResult = function (value) {
        return `O resultado é: ${value}`
     }
 
    console.log(showResult(result))
 
 
 /*
    RESUMO:
    - Funções são usadas para executar um determinado trecho de código em um momento apropriado
    - Funções devem ser declaradas, e para serem utilizadas devem ser invocadas. 
    - Funtion declaration estão sujeitas ao processo de hoisting
    - Hoisting significa que quando declaramos uma função, seja em qualquer lugar do nosso código o JS joga essa declaração para o inicio do código
    - Graças ao Hoist é possível utilizar uma função antes mesmo da sua declaração
    - Funções podem receber valores que na sua declaração são chamados de parametros
    - E esse valores podem ser enviados para a função quando ela é invocada, eles são chamados de argumentos
    - Parametros são opcionais e podem receber um valor default caso não sejam passados na invocação da função
    - Funções podem retornar valores
 */