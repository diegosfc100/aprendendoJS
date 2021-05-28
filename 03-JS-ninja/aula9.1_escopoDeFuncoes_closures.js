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


