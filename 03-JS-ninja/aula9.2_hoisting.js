// HOISTING - Se existir uma função literal (não atribuida a uma variável) ele irá içar essa função para o topo.
    // Como é escrito 
    function myFunc3(){
        var num1 = 99;
        var num2 = 1;
        return sum3();
        function sum3(){
            return num1 + num2;
        }
    }
    console.log(myFunc3()); // 100

    // Como o Javascript interpreta
        function myFunc4( ){
            function sum4( ){
                return num1 + num2;
            }
            var num1 = 99;
            var num2 = 1;
            return sum4( );
        }
        console.log( myFunc() ); // 3


    /* Porém se essa função estiver atribuída a uma variável esse içamento não funciona. 
       As variáveis só são chamadas a partir de onde foram criadas, elas não são içadas. */
        function myFunc5( ){
            var num1 = 1;
            var num2 = 2;
            return sum5( );
            var func5 = function sum5( ){
                return num1 + num2;
            }
        }
       // console.log(myFunc5()); // Erro


        //Testando
        function teste(){
            console.log('ANTES DE DECLARAR:', nome);
            var nome = 'DIEGO R.'
            console.log('DEPOIS DE DECLARAR:', nome);
        }

        teste();