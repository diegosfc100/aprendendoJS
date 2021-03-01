// ARRAYS 
    let heros = ['Batman', 'Catwoman', 'Iron man']
    const ages = [31, 25, 39, 40]
    const randomArray = ['Parker', 'Diana', 19, 18]

    heros[2] = 'Spider man'

    console.log(heros)
    console.log(heros[0])
    console.log(ages[2])
    console.log(randomArray)


    // Métodos de Arrays
    const joinHeros = heros.join() // Retorna uma string com todos os itens do array, por padrão separados por vírgula
    const indexOf25 = ages.indexOf(25) // Retorna o index de um item do array
    const moreHeros = heros.concat(['Superman', 'Wolwerine']) // Concatena 2 Arrays
    const pushToHeros = heros.push('Cyclops', 'Hulk') // Insere um novo item no fim do array
    const popHeros = heros.pop()

    console.log(heros.length) // Exibe o cumprimento do Array
    console.log(joinHeros)
    console.log(indexOf25)
    console.log(moreHeros)
    console.log(pushToHeros)
    console.log(popHeros)


    
// NULL E UNDEFINED
 
let emptiness;

    console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)

    emptiness = null

    console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)



/*
   RESUMO/ANOTAÇÕES:
      - Arrays servem para armazenar uma lista de valores que tem relação entre si
      
      - É possível utilizar notação de colchetes para acessar um item do array
      
      - É possível sobrescrever um item com a notação de colchetes
      
      - Arrays podem armazenar diferentes tipos de dados e não necessáriamente precisam ser do mesmo tipo
      
      - Arrays também possuem propriedades e métodos
      - Undefined é atribuido automáticamente para uma váriável quando não fazemos isso
      - Quando undefined é usado em uma operação numérica o retorno é NaN
      - Quando undefined é usado dentro de uma string ele é convertido para string
      - Null deve ser atribuido explicitamente para uma variável
      - Quando usado em uma operação numérica o null é convertido para 0
      - Null também é convertido para string quando usado em uma
*/