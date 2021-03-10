// ESCOPO DE FUNÇÕES

	/* Da mesma forma que variáveis, as funções criadas dentro de outras funções, tem escopo local,
     não podendo ser acessadas fora da função que as contém. */
    function myFunc(){
        function sum(){
            return 1 + 2;
        }
        return sum( );
    }

    console.log(myFunc()); // 3
    console.log(sum()); // erro



// CLOSURES
    // Funções que conseguem acessar valores externos a ela
    function myFunc2(){
        var num1 = 10;
        var num2 = 20;
        function sum2(){
            return num1 + num2;
        }        
        return sum2();
    }

    console.log(myFunc2()); // 30  



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



// IIFE Funções auto executáveis ()
    function sum(){
        return 1 + 3;
    }
    console.log( sum() ); // 4


    var sum2 = function(){
        return 3 + 2;
    };
    console.log( sum2() ); // 5


    var sum3 = function otherSum(){
        return 5 + 8;
    };
    //console.log(otherSum() ); // Erro , não consegue executá-la pois ela está no escopo da variável


    // Não há como executar funções anônimas chamando-as, deve-se chama-las usando '()', desta forma:
        (function(){
            console.log( 20 + 2 );
        })();  