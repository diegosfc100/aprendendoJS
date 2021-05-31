// PROPRIEDADE E MÉTODOS DE FUNÇÕES
	
    // LENGTH - conta a quantidade de parâmetros que uma função pode receber
    function myFunction(a, b, c){}
    console.log( myFunction.length ); // 3


    // TOSTRING - mostra a função literalmente
    function myFunction(a, b, c){
        return 'oi';
    }
    console.log( myFunction.toString() ); 
   

     // CALL - invoca a função, igual a chamar myFunction(), mas no call você pode passar como parametro o 'this' podendo dizer quem ele vai ser 
     function myFunction(a, b, c){
        return 'oi';
    }
    console.log( myFunction.call() ); // oi