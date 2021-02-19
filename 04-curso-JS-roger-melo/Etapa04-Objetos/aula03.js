//objeto MATH - é um objeto que contém métodos e propriedades matemáticas/
//alguns MÉTODOS/
const area = 7.7
console.log(Math.round(area)) //arredonda um número. Se menor que 5 arredonda pra baixo, se maior ou igual 5 arredonda pra cima
console.log(Math.floor(area)) //sempre arredonda pra baixo independente da parte decimal.
console.log(Math.ceil(area)) //sempre arredonda pra cima independente da parte decimal.
console.log(Math.trunc(area)) //vai remover a parte decimal e retorna a parte inteira.

/*números aleatórios*/
    const randomNumber = Math.random()
    console.log(randomNumber)
    console.log(Math.round(randomNumber * 100)) //obtendo número aleatório entre 0 e 100

/* TIPOS DE REFERÊNCIA E TIPOS PRIMITIVOS*/
//stack e heap fazem parte da memória./

/*PRIMITIVOS                               
    1 - Numbers
    2 - Strings
    3 - Booleans
    4 - Null
    5 - Undefined
    6 - Symbol
    7 - BigInt

    * Armazenados na STACK - São mais rápidos, porém menores.
*/
    let scoreOne = 10
    let scoreTwo = scoreOne
    console.log(`ScoreOne: ${scoreOne} | ScoreTwo: ${scoreTwo}`)
    
    scoreOne = 222
    console.log(`ScoreOne: ${scoreOne} | ScoreTwo: ${scoreTwo}`)
    // como são valores primitivos (é feito cópia), scoreOne não afeta scoreTwo e vice-versa.

/*REFERÊNCIA (Todos os tipos de objetos)
    - Objetos Literais
    - Arrays
    - Funções
    - Datas
    - Todos outros objetos

    * Armazenados na HEAP - São mais lentos, porém maiores.
*/
    let userOne = {name: 'gabriel', age: 30}
    let userTwo = userOne

    console.log(userOne, userTwo)
    
    userTwo.name = 'Joãozinho'
    userTwo.age = 12

    console.log(userOne, userTwo)
    // como são valores por referência (é passado referência da memória), ao atribuir um objeto ao outro eles compartilham
    // seu endereço, é por isso que ao trocar qualquer propriedade de um afeta o outro.
