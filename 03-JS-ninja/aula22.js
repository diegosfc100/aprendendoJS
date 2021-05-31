    function myFunction(a, b, c){
        return this.lastName;
    }
    console.log( myFunction() ); // undefined	
    
    


    function myFunction(a, b, c){
        return this.lastName;
    }
    var obj = {
        lastName: 'Rodrigues'
    };
    myFunction.call(obj); // Rodrigues - já que o obj vai ser o this da função 

    // Passando o this e os parametros	
        myFunction.call( obj, 1, 2, 3 );
    // Não precisando passar o this você pode fazer destas formas 
        myFunction.call( null, 1, 2, 3 );
        myFunction.call( myFunction, 1, 2, 3 );
        myFunction.call( {}, 1, 2, 3 );

// apply(this) - Passando um array como parametro de forma dinamica. Ao invés de passar vários parametros você passa o this e o array, sendo cada elemento do array os outros parametros.
    function myFunction(a, b, c){
        console.log( this.lastName, a, b, c );
    }
    var arr = [ 1, 2, 3 ];
    
    myFunction.call( obj, arr ); // Battesini [1, 2, 3,] undefined undefined

    // .apply passa o array de forma dinâmica
    myFunction.apply( obj, arr ); // Battesini 1 2 3

// Prototype
// Protótipo dos construtores, a partir dele é possível fazer herança e estender os objetos.

// Instanciar um objeto, é criar uma cópia de um objeto principal herdando suas propriedades e métodos.
    var obj = new Object(); // Propriedades e métodos de objeto
    var obj = new Array(); // Propriedades e métodos de array

// Utilizando construtores - Usando o new, você está copiando (ao invés de apontar) tudo o que está em Function.prototype para a nova função.
    function MyFunction( name, lastName ){  // Construtores começam com letra maiúscula
        this.fullName = name + ' ' + lastName; // fullName é um novo método de MyFunction
    }
    var fernando = new MyFunction( 'Fernando', 'Daciuk' );
    console.log( fernando.fullName ); // Fernando Daciuk

// Estendendo a função principal utilizando protótipo
    function MyFunction( name, lastName ){ // Função construtora
        this.name = name; // método name
        this.lastName = lastName; // método lastName
    }
    MyFunction.prototype.fullName = function (){ // criando método fullName, usando o prototype ele irá herdar os métodos name e lastName
        return this.name + ' ' + this.lastName;
    }
    var fernando = new MyFunction( 'Fernando', 'Daciuk' );
    console.log( fernando.fullName() ); // Fernando Daciuk

// Criando propriedades depois de instanciar o objeto 
    MyFunction.prototype.age = 30;
    console.log( fernando.age ); // 30

// Prototype pode ser sobrescrito
    MyFunction.prototype.age = 20;
    console.log( fernando.age ); // 20

    // antes de fazer a alteração ele verifica se existe uma propriedade no objeto, se existir esta vai prevalecer 
    function MyFunction( name, lastName ){
        this.name = name;
        this.lastName = lastName;
        this.age = 30;
    }
    MyFunction.prototype.age = 20;
    console.log( fernando.age ); // 30

// Array-like para array de verdade
    // Falso array
        function myFunction(){
            console.log( arguments )
        }
        myFunction( 1,2,3,4 ); // [1, 2, 3, 4]

    // array-like
        function myFunction(){
            arguments.forEach(function(arg){
                console.log( arg );
            });			
        }
        myFunction( 1,2,3,4 ); // Erro, pois o arguments não é um array de verdade

        function myFunction(){
            var arr = [ 1, 2, 3, 4 ];
            arr.forEach(function(item){
                console.log( item );
            });			
        }
        myFunction(); // 1 2 3 4

        function myFunction(){
            var arr = [ 1, 2, 3, 4 ];
            arr.forEach(function( item ){
                console.log( this );
            });			
        }
        myFunction(); // o this vai ser undefined pois está sendo iterado pelo array arr

        function myFunction(){
            var arr = [ 1, 2, 3, 4 ];
            arr.forEach(function( item ){
                console.log( this );
            }, arguments); // segundo parâmetro, é o this dentro do foreach			
        }
        myFunction('a','b','c','d'); // 0: "a", 1: "b", 2: "c", 3: "d"

        function myFunction(){
            var arr = [ 1, 2, 3, 4 ];
            arr.forEach(function( item, index ){
                console.log( this[index] );
            }, arguments); // segundo parâmetro, é o this dentro do foreach			
        }
        myFunction(1, 2, 3, 4, 5, 6, 7, 8); // 1, 2, 3, 4 só retorna os quatro primeiros números pois o array arr só tem 4 elementos

        function myFunction(){
            for ( var i = 0; i < arguments.length; i++ ){
                console.log(arguments[i]);
            }		
        }
        myFunction(1, 2, 3, 4, 5, 6, 7, 8); // 1, 2, 3, 4, 5, 6, 7, 8

        function myFunction(){
            Array.prototype.forEach.call( arguments, function( item, index ){
                console.log( item );
            });	
        }
        myFunction(1, 2, 3, 4, 5, 6, 7, 8); // 1, 2, 3, 4, 5, 6, 7, 8 engana o javascript chamando o arguments de array

         function myFunction(){
            var result = Array.prototype.reduce.call( arguments, function( acumulated, actual, index ){
                return acumulated + actual;
            });	
            console.log( result );

            // mesma coisa que fazer isso 
            arr.reduce(function(acumulated, actual){
                return acumulated + item;
            });
        }
        myFunction(1, 2, 3, 4, 5, 6, 7, 8); // 1, 2, 3, 4, 5, 6, 7, 8 engana o javascript chamando o arguments de array 