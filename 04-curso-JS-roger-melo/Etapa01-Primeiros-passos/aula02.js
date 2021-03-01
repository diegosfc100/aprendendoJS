// TEMPLATE STRING
    const postTitle = 'Biscoito ou Bolacha?';
    const postAutor = 'Diego Rodrigues';
    const comentarios = 20;
    const idade = 30;

    //Concatenação no ES5

    /* para inserir literalmente aspas em uma string, temos que utilizar o sinal oposto da abertura
    e fechamento que declara a string, ou seja, utilizar, nesse caso, aspas duplas. */

    const concatenacaoES5Forma1 = 'O post "' + postTitle + '", do ' + postAutor + ', recebeu ' + comentarios + ' comentários'
    //O post "Biscoito ou Bolacha?", do Diego Rodrigues, recebeu 20 comentários.


    // Utilizando template string

    // para declarar uma template string utilizamos crase.
    // podemos quebrar linhas, sem quebrar o código.
    // podemos utilizar aspas simples ou dublas sem problemas no decorrer da string
    const templateString1 = `O post "${postTitle}", do ${postAutor}, recebeu ${comentarios} comentários`;
    console.log(templateString1);


    const templateString3 = `
        O post ${postTitle}
        Autor: ${postAutor}
        Recebeu ${comentarios} comentários.`;

    console.log(templateString3);
    

// BOOLEANS E COMPARAÇÕES
    console.log(true, false, 'true', 'false')

    // Métodos podem retornar booleans
    const email = 'brucewayne@rogermelo.com.br'
    const includes = email.includes('@')
    const names = ['dio', 'roger', 'robert']
    const arrayIncludes = names.includes('roger') // Verifica se o argumento passado existe dentro de uma string ou um array

    console.log(includes)
    console.log(arrayIncludes)



// OPERADORES DE COMPARAÇÃO
    const age = 31;
    const nome = 'roger';

    // console.log(age == 31)
    // console.log(age == 35)
    // console.log(age != 31)
    // console.log(age > 31)
    // console.log(age < 32)
    // console.log(age <= 31)
    // console.log(age >= 31)

    console.log(nome == 'roger')
    console.log(nome == 'Roger')
    console.log(nome > 'belinha')
    console.log(nome > 'Roger')
    console.log(nome > 'Belinha')


    // 'Igual a e do mesmo tipo' e 'diferente de, e do mesmo tipo'

    console.log(age === 31)
    console.log(age === '31')

    console.log(age !== 31)
    console.log(age !== '31')



// CONVERSÃO DE TIPOS
    let score = '100'

    score = Number(score)

    console.log(score + 1)
    console.log(typeof score)

    const crazyConvertion = Number('maçã')
    const convertedNumber = String(97)
    const booleanConvertion = Boolean(10)

    console.log(crazyConvertion)
    console.log(convertedNumber, typeof convertedNumber)
    console.log(booleanConvertion, typeof booleanConvertion)



    /*
    Valores falsy: 
        - false
        - 0 
        - "", '', ``
        - null
        - undefined
        - NaN
    Valores truthy:
        - Qualquer valor que não é falsy
    */

    
/*
   RESUMO: 
      - Booleans são representados por apenas dois valores: true e false
      - Booleans são usados para fazer comparações em trechos de códigos
      - Existem diversos métodos que podem retornar um boolean
      - Existem operadores de comparação para verificar se valor são iguais, diferentes, maiores, menores, maiores ou iguais e menores ou iguais
      - É possível fazer comparações com strings
      - JS é Case Sensitive, isso significa que diferencia maiúsculas de minúsculas. roger é diferente de Roger
      - Para comparar duas strings o javascript considera uma precedência de acordo com a ordem do alfabeto, então r é maior que b. 
      - As letras minúsculas são consideradas maiores que as maiúsculas
      - Deve-se sempre tentar usar os operadores de igualdade estrita para fazer comparações
      - É possível fazer conversões de tipo utilizando funções construtoras como Number(), String() e Boolean()
      - O operador typeof mostra qual o tipo de um valor
*/