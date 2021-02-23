// RETORNO DE FUNÇÕES além dos tipos primitivos.
	//Array
    function myFunction() {
        return [1, 2, 3];
    }
    console.log(myFunction()); 
    console.log(myFunction()[0]); //acessando indice do array;
    console.log(myFunction()[1]); //acessando indice do array;
    console.log(myFunction()[2]); //acessando indice do array;
    

    //Objetos
    function myFunction2() {
        return {
            prop0:'Rodrigues',
            prop1: true,
            prop2: 'Diego',
            prop3: function(){
                return 'Olá, Mundo.';
                }
        };
    }
    console.log(myFunction2())
    console.log(myFunction2().prop2) 


    // pegando valores de objeto da função a atribuindo numa variavel.
    var nomeCompĺeto = myFunction2().prop2 + myFunction2().prop0; 
    console.log(nomeCompĺeto);



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

    