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





    