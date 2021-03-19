// OBJETOS
	// São mutáveis e manipulados por referências
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2'
    }

    var obj2 = {
        prop1: 'prop1',
        prop2: 'prop2' 
    }


    // Alterando propriedades
        obj.prop1 = 'propriedade 1';
     

    // Deletando propriedades
        delete obj.prop1


    // Adicionando propriedades
        obj.prop1 = 'prop1';


    // Objetos são manipulados por referências
        var obj2 = {
            prop1: 'prop1',
            prop2: 'prop2'
        }

    obj === obj2; // false
    
    var objCopy = obj;
    objCopy === obj; // true, pois obj é uma referência de objCopy
    objCopy.prop1; // 'prop1'
    objCopy.prop1 = 'propriedade do objeto copy';
    objCopy.prop1; // 'propriedade do objeto copy'
    obj.prop1; // 'propriedade do objeto copy' , pois o objeto está passado como referência


    // Criando Objetos
    // Literais
        // É mais interessante criar o literal que o construtor, pois é mais rápido
        var obj = {};

    // Construtor
        var newObj = new Object();

    // Object.create()
        // É uma função do javascript
        var obj = Object.create(); 
        // retorna erro, pois necessita do prototype que é uma propriedade.
        // Cada objeto que é criado herda do protótipo do próprio objeto


    //Herança
    var obj = {	x: 1, y: 2 }; // objeto herdado por obj2
    var obj2 = Object.create(obj); // cria um novo objeto com valores herdados de obj
    obj2 // {}
    obj2.prototype // undefined
    obj2.x // 1

    // O objeto pai não muda quando os valores de seus flhos são alterados.
        obj2.x = 'lala';
        obj2.x // 'lala'
        obj.x // 1


    // Usando o for/in para enumerar propriedades. Ele irá retornar todas as propriedades, herdadas e não herdadas.
        for( var prop in obj2 ){
            console.log( prop );
        }


    // Algumas funcionalidades para objetos
    // Forma de verificar propriedades que são só do objeto, não são herdadas.
        obj.hasOwnProperty('x'); // true
        obj2.hasOwnProperty('y'); // False pois são herdados


    // Retorna um array com as propriedades do objeto
        Object.keys(obj); // [ 'x', 'y' ]

        // Como agora ele é um array você pode usar propriedades de array, como o tamanho
        Object.keys(obj).length // 2


    // Verificar se um objeto é protótipo do outro, ou seja se foi herdado
        obj.isPrototypeOf(obj2) // true - o obj é protótipo de obj2
        obj2.isPrototypeOf(obj) // false - o obj2 não é protótipo do obj


    // JSON.stringify(obj)
        // Transforma um objeto em uma string no padrão JSON
        JSON.stringify(obj) // '{ "prop1": 'prop1', "prop2": 'prop2' }'

        // Voltando a ser objeto, converte string em objeto
        JSON.parse(obj) // { prop1: 'prop1', prop2: 'prop2' }



// ARRAYS
    // Adicionando itens no array pelo índice
        var arr = [];
        arr[0] = 10
        arr[2] = 'oito'
        arr[5] = 'doze'
        arr // [10, ,'oito', , , 'doze']

    // Adicionando ao final
        arr = [1, 2, 3, 4];
        arr.push('5'); // [1, 2, 3, 4, 5]

    // Removendo do final
        arr.pop(); // [1, 2, 3, 4]
        // Removendo e salvando em uma variável
        var last = arr.pop();
        arr // [1, 2, 3]
        last // 4

    // Unindo itens do array
        arr.join() // '1,2,3'
        // O parâmetro usado em join é o separador do array
        arr.join(' - ') // '1 - 2 - 3'
        arr.join(', ') // '1, 2, 3'

    // Invertendo os itens do array (Tem efeito colateral, modifica o array principal!)
        arr.reverse() // [3, 2, 1]

    // Ordenar por ordem alfabética (Tem efeito colateral, modifica o array principal!)
        arr = ['c', 'k', 'z', 'a'];
        arr.sort() // ['a', 'c', 'k', 'z']