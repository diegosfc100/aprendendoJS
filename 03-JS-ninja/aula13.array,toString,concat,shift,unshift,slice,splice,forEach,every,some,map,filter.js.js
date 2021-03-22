// Arrays
	// Arrays são objetos disfarçados e você consegue usar enumerado
	// toString()
    var arr = [ 1, 2, 3, 4 ];
    arr.toString() // '1,2,3,4'


    // concat()
        arr.concat( 5 ) // [ 1, 2, 3, 4, 5 ]
        // A diferença deste método para o push é que o push modifica o array existente e este cria um outro array, e o array principal fica intacto.
        arr.concat( [ 6, 7, 8 ], [ 9, 10 ] ) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
        arr.concat( [ 6, 7, 8, [ 9, 10 ] ] ) // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10] ]


    // unshift()
        // Adiciona um item no inicio do array e retorna o length
        arr.unshift( 0 ) // [ 0, 1, 2, 3, 4 ]


    // shift()
        // Remove o primeiro item do Array
        arr.shift( 0 ) // [ 1, 2, 3, 4 ]


    // slice()
        // Retorna um pedaço do array sem modificar o array principal
        arr.slice( 1 ) // [ 2, 3, 4 ] Começa a partir da posição 1
        arr.slice( 0, 2 ) // [ 1, 2 ]  OBS.: O segundo parâmetro ele não está incluso!
        arr.slice( -2 ) // [ 4, 3 ] Pega os dois últimos
        arr.slice( 2, 1 ) // []


    // splice()
        // Modifica o array principal, pode adicionar ou removar itens.
        // Para remover
            //O primeiro parametro indica o índice de início, o segundo a quantidade de itens a serem removidos
            arr.splice( 2 ) // [ 1, 2 ] Remove todos os itens a partir do segundo índice
            arr.splice( 1, 2 ) // [ 1, 4 ] Removeu dois itens a partir do indice 1

        // Para adicionar
            // Além do segundo parâmetro ser fixado em 0, acrescenta-se mais parâmetros para indicar o que se quer incluir
            arr.splice( 1, 0, 'a' ) // [ 1, "a", 2, 3, 4 ]
            arr.splice( 2, 0, 'b' ) // [ 1, "a", "b", 2, 3, 4 ]

        // Para alterar
            arr.splice( 1, 2, 1.5, 1.8 ) // [ 1, 1.5, 1.8, 2, 3, 4 ]


    // forEach()
        // Recebe um parâmetro que é uma função que diz oq vai acontecer com cada item do array. Esta função pode possuir 3 parâmetros, o item, o index e o array.
        var teste = [ 1, 2, 3, 4, 5, 6, 7 ]
        teste.forEach( function( item, index, array ){
            console.log( item, index, array );
        });
        /*  1 0 [ 1, 2, 3, 4, 5, 6, 7 ]
            2 1 [ 1, 2, 3, 4, 5, 6, 7 ]
            3 2 [ 1, 2, 3, 4, 5, 6, 7 ]
            4 3 [ 1, 2, 3, 4, 5, 6, 7 ]
            5 4 [ 1, 2, 3, 4, 5, 6, 7 ]
            6 5 [ 1, 2, 3, 4, 5, 6, 7 ]
            7 6 [ 1, 2, 3, 4, 5, 6, 7 ] */

        // Somando itens
        var sum = 0;
        teste.forEach(function( item ){
            sum += item;
        });
        console.log( sum ); // 28


    // every()
        // Aplica uma função com retorno true ou false, baseado no parâmetro ou no item do array e na condição especificada. Usado para verificar itens do array.
        var every = teste.every(function(item){
            return item < 5;
        });
        // Se todos os itens do array forem menores do que 5 ele vai retornar true, como não são retorna false.


    // some()
        // faz o mesmo que o every porém ao invés de todos terem que satisfazer a condição, se apenas um satisfizer ele já retorna true.
        var some = teste.some(function(item){
            return item % 2 === 0;
        });
        // retorna true pois pelo menos um é par.


    // map()
        // percorre todos os itens do array retornando outro array com os itens que satisfazem a condição. A diferença entre o map e o foreach é que o map já retorna o array.
        var map = teste.map(function(item, index, array){
            return item % 2 === 0;
        });
        console.log(map) // [ false, true, false, true, false, true, false ]
        var map = teste.map(function(item, index, array){
            return item + 1;
        });
        console.log(map) // [ 2, 3, 4, 5, 6, 7, 8 ]
        var map = teste.map(function(item, index, array){
            return { index: index, item: item };
        });
        console.log(map) // [ 2, 3, 4, 5, 6, 7, 8 ]
        

    // filter()
        // filtra os itens do array e os retorna em outro array
        var filter = teste.filter(function(item, index, array){
            return item > 2;
        });
        console.log( filter ); // [ 3, 4, 5, 6, 7 ]

        // você pode encadear os objetos.
        var map = teste.map(function(item){
            return item + 10;
        }).filter(function(item){
            return item > 15;
        });
        console.log( teste, filter, map ); // [ 1, 2, 3, 4, 5, 6, 7 ] [ 16, 17 ] [ 11, 12, 13, 14, 15, 16, 17 ]