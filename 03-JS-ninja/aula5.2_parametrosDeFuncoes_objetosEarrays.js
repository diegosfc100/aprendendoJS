// PARAMETROS DE FUNÇÕES além dos tipos primitivos
    //Arrays
    var arr = ["Uva","Banana","Maça"];

    function myFunction3(arg){
        return arg;
    }
    console.log(myFunction3()); // como não foi passado nenhum argumento, o retorno é undefined.
    
    //passando argumento para a função.
    console.log(myFunction3(arr));
        
    
    // passando indice do array no return
    function myFunction4(arg){
        return arg[1]; 
    }
    console.log(myFunction4(arr)); // banana

    //exemplo com array criado dentro do argumento; 
    console.log(myFunction4(["Santos", "TRI", 1912, 7, 11]));



// OBJETOS
    var obj = {
        prop: 'Diego',
        curso: 'Js-ninja',
        ninja: true
    }

    function objetos(arg) {
        return arg;
    }

    console.log(objetos(2021));
    console.log(objetos(obj));
    console.log(objetos(obj.curso));



//ARRAYS == OBJETOS
    var arr1 = [ 1, 2, 3 ];

    var arr2 = {
        '0': 1,
        '1': 2,
        '2': 3,
    };
    // arr1 e arr2 são semelhantes, um array é um objeto, portanto pode-se usar a notação de array para objetos.

    console.log(arr2['0'])// 1