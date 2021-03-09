// NOMEANDO FUNÇÕES

	// Nomeando as funções facilita o debug ao procurar por erros
    var func = function func(){}

	// Nomeando a função pode-se usar o comando .name para saber o nome da função que foi atribuido à variável
		var func2 = function myFunc( ){}
		func2.name; // 'myFunc'
		
		function myFunc2( ){}
		myFunc2.name; // 'myFunc2'

        
	
// PROGRAMAÇÃO FUNCIONAL
	// Funções são objetos de primeira classe, que quer dizer que elas tem o mesmo tratamento que os objetos.
	// Permintindo o trabalho de forma funcional.
	
	// Funções Literais
		function sum( x, y ){
			return x + y;
		}
	
	// Você pode retornar objetos em funções
		function person( ){
			return {
				name: 'Diego',
				lastName: 'Rodrigues'
			}
		}
		console.log(person().name ); // 'Diego'

	
	// Você pode retornar funções em funções
		//exemplo1:
		function adder( x ){
			return function(y){
				return x + y;
			}
		} 

		//exemplo2:
		function adder2( x ){
			function addOther(y){
				return x + y;
			}
			return addOther;
		}


	// Invocando
		// Forma 1
		var add = adder(2);
		add(3);
		

		// Forma 2
		adder2(2)(3);
		

		
	// Objetos como Parâmetro
		var car = {
			color: 'Yellow',
		}
		function getCarColor(mycar){
			return mycar.color;
		}
		console.log( getCarColor(car) ); // 'Yellow'
		
	// Funções como Parâmetro
		// Forma 1
		function showOtherFunction(func){
			return func();
		}
		function returnedFunction(){
			return 'Returned function!';
		}
		console.log(showOtherFunction(returnedFunction));
		
		// Forma 2
		console.log(showOtherFunction(function(){
			return 'Returned function';
		}));