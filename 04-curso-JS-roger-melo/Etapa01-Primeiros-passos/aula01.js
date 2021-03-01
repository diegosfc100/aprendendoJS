// STRINGS
    console.log('Hello, World!')

    // Concatenação de Strings
    const firstName = 'Nathan'
    const lastName = 'Drake'
    const fullName = firstName + ' ' + lastName

    console.log(fullName)


    // Acessando caracteres
    console.log(fullName[0])


    // Comprimento de uma string
    console.log(fullName.length)


    // Métodos de Strings
    console.log(fullName.toUpperCase())


    // Alguns métodos não alteram a string original, outros sim
    const result = fullName.toLowerCase() 
    console.log(result)


    const index = fullName.indexOf('D')
    console.log(index)


    // Métodos comuns de strings

    const email = 'laracroft@rogermelo.com.br'

    const lastIndexOfA = email.lastIndexOf('a') // Retorna a última ocorrência de um caracter
    const emailSlice = email.slice(0, 9) // Fatia uma string de um ponto a outro
    const emailReplace = email.replace('l', 'y') // Substitui uma string por outra



    /*
    RESUMO:
        - strings são qualquer cadeia de caracteres específicadas entre aspas simples ou duplas, incluindo números e caracteres especiais. 
        - Strings podem ser concatenadas utilizando o sinal de mais(+)
        - Podemos acessar um caracter específico utilizando a notação de colchetes 
        - strings possuem métodos, que em essência são a mesma coisa que funções, e podem ou não alterar a string original
    */



// NUMBERS

    // Inteiros e decimais
    const radius = 10
    const pi = 3.14


    // Operadores aritiméticos 
    console.log( 10 + 3) // Adição
    console.log( 10 - 3) // Subtração
    console.log( 10 * 3) // Multiplicação
    console.log( 10 / 3) // Divisão
    console.log( 10 % 3) // Módulo(Resto)
    console.log( 10 ** 3) // Potenciação


    // Ordem de operadores

    const area = pi * radius ** 2
    console.log(area)

    // 1º Parenteses
    // 2º Expoentes ou raizes
    // 3º Multiplicação
    // 4º Adição e subtração

    // Operadores de incremento e decremento
    let postLikes = 10

    postLikes = postLikes + 1
    console.log(postLikes)

    postLikes = postLikes - 1
    console.log(postLikes)

    // Shorthand
    postLikes++
    console.log(postLikes)

    postLikes--
    console.log(postLikes)



// operadores addition, subtraction, multiplication, e division assignment

    // postLikes = postLikes + 10
    // console.log(postLikes)

    // Shorthand
    postLikes += 10
    console.log(postLikes)

    postLikes -= 10
    console.log(postLikes)

    postLikes *= 10
    console.log(postLikes)

    postLikes /= 10
    console.log(postLikes)



// NaN - not a number
    console.log(7 / 'oi')
    


// Concatenação de string com número
const likesMessage = 'O post tem ' + postLikes + ' Likes'

console.log(likesMessage)


/*
   Resumo:
      - Números são representados pelo tipo number, que pode armazenar tanto inteiros quanto decimais
      - É possível fazer operações aritiméticas e estas seguem a mesma ordem de prescedência da matemática
      - É possível usar shorthands para para operações aritiméticas
      - NaN é um valor especial que retorna quando uma operação não resulta em um número
      - Quando uma string é concatenada com um número o JS converte o número em string também
*/