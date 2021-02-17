// Retorno de funções além dos tipos primitivos
	// Arrays
    function myFunction() {
        return [1, 2, 3];
    }
  /*myFunction() -> [1, 2, 3]
    myFunction()[0] -> 1
    myFunction()[1] -> 2
    myFunction()[2] -> 3 */


// Objetos
    function myFunction2() {
        return {
            prop1: true,
            prop2: 'Diego',
            prop3: function(){
                return 'prop3';
            }
        };
    }
    /* myFunction2() -> {	prop1: true,
                        prop2: 'Clara',
                        prop3: [Function] }
    myFunction2().prop1 -> true */


// Parâmetro de funções além dos tipos primitivos
// Arrays
    var arr = [1, 2, 3];
    function myFunction3(arg){
        return arg;
    }
    function myFunction4(arg){
        return arg[1];
    }

    myFunction4([ 1, 2, 4, 7, 8]); // 2


// Objetos
    var obj = {
        propriedade: 'Clara',
        curso: 'Js-ninja',
        ninja: true
    }
    function objetos(obj) {
        return obj;
    }
    /* objetos(obj); -> {	propriedade: 'Clara',
                            curso: 'Js-ninja',
                            ninja: true }
        objetos(obj).propriedade;-> 'Clara' */

//Arrays para objetos e vice-versa
    var arr1 = [ 1, 2, 3 ];
    var arr2 = {
        '0': 1,
        '1': 2,
        '2': 3,
    };
    // arr1 e arr2 são semelhantes, um array é um objeto, portanto pode-se usar a notação de array para objetos.

    arr2['0'] // 1
    book('livro1').quantidadePaginas