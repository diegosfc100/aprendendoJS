//USE STRICT
	// diretiva, deve utiliza-la no escopo que você quer que seja restrito, pois ele não irá permitir a criação de variáveis sem o 'var'
	(function(){
		'use strict';
		var myName = 'Diego';
		console.log(myName); // Diego
	})();
	console.log(myName); // erro pois a variável myName está em escopo local


	// Sem o 'var' ele aponta o erro para dentro da função, para que você adicione o 'var'.
	(function(){
		'use strict';
		myName = 'Diego';
		console.log(myName);
	})();
	console.log(myName);


	// WITH
		// diminui o tamanho do objeto, mas existe um problema, pois as variáveis dentro do with podem se confundir, por isso ele é proibido no 'use strict'
		(function(){
			var obj = {
				prop1: {
					prop2: {
						prop3: {
							prop31: 'prop31',
							prop32: 'prop32',
							prop33: 'prop33'
						}
					}
				}
			};
			console.log(obj.prop1.prop2.prop3);

			with( obj.prop1.prop2.prop3 ){
				console.log( prop31 );
			}
		})();


	// GLOBAL THIS
		(function(){
			'use strict'
			function Person( name, lastName, age ){
		        this.name = name;
		        this.lastName = lastName;
		        this.age = age;
		    }
			console.log( new Person( 'Diego', 'Rodrigues', 30 ) ); // este é o jeito correto de chamar, instanciando
			console.log( Person( 'Diego', 'Rodrigues', 30 ) ); // não instanciando, utilizando como função, você irá receber undefined, o this global retorna nesse valor. O 'use strict' não irá permitir isso.
		})();
		console.log( this ) // retorna undefined quando não é usado o construtor


	// Delete
		// O delete nem sempre pode ser usado. Ele só deleta propriedades de objetos.
		(function(){
			'use strict'
			var myVar = 2;
			var obj = {
				prop1: 'prop1',
				prop2: 'prop2',
				prop3: 'prop3'
			};
			console.log( delete obj.prop1 ); // true
			console.log( delete obj.prop1 ); // { prop2: 'prop2',	prop3: 'prop3' }
			console.log( delete myVar ); // syntax error
			// Sem o modo estrito ele apenas retornaria false, mas com o modo estrito ele retorna syntax error.
		})();


	// propriedades e argumentos
		// No use strict as propriedades de objetos devem ter nomes diferentes.
		(function(){
			'use strict'
			var obj = {
				prop1: 'prop1',
				prop1: 'prop2',
				prop3: 'prop3'
			};
			console.log( obj ); // syntax error
			// Sem o modo estrito a segunda propriedade apenas iria sobrescrever a outra.
		})();


		// assim como propriedades os argumentos de funções também devem ter nomes diferentes.
		(function(){
			'use strict'
			function myFunction( a, a, b ){
				return a + b;
			}
			console.log( myFunction( 1, 2, 3 ) ); // syntax error
			// Sem o modo estrito o primeiro argumento seria sobrescrito, retornando 5.
		})();



// OBJETO STRING
	// .length
		// Conta a quantidade de caracteres de uma string
		'DIEGO'.length // 5

	// charAt(index)
		// Retorna a letra passada como parametro
		'DIEGO'.charAt(0); // 'D'

	// array syntax
		'DIEGO'[1] // 'I'

	// concat()
		// concatena strings
		'diego'.concat( ' rodrigues', ' meu', ' nome', ' é.' ) // 'diego rodrigues meu nome é'
		// não modifica a string principal

		var nome = 'diego';
		nome.concat( ' str1', ' str2', ' str3' ); // 'diego str1 str2 str3'
		console.log( nome ) // 'diego'

	// indexOf(string, start)
		// pesquisa dentro da string retornando a posição, você pode dizer por onde quer começar a pesquisar. -1 quer dizer que não existe
		nome.indexOf('d'); // 0
		nome.indexOf('ego'); // 2
		nome.indexOf('z'); // -1
		// lastIndexOf(string, start) - mesma coisa apenas busca de trás pra frente

	// replace( suibstituir, substituta )
		// Substitui um trecho específico da string por outra string sem modificar a string principal
		nome.replace('d', 't') // 'tiego'
		console.log( nome ) // 'diego'

	// slice(começo, fim)
		// pega um trecho da string sem modificar a string principal, você determina aonde quer começar e onde termina, sendo que não inclui a última letra
		nome.slice(1) // 'iego'
		nome.slice(1, 3) // 'go'

	// split( separador, limite )
		// quebra a string e a transforma em um array excluindo o item separador sem midificar a string principal
		nome = fernando;
		nome.split() // ['fernando']
		nome.split('n') // ['fer', 'a', 'do']
		// você pode usar o split pra separar e o join pra juntar
		var arr = nome.split('n'); // ['fer', 'a', 'do']
		arr.join('n') // 'fernando'
		// Isto server pra fazer subistituições
		nome.split('n').join('z'); // 'ferzazdo'

	// substring()
		// faz a mesma coisa que o slice, com a diferença de que se você inverter os valores ele pega do final pro inicio também.

	// toLowerCase()
		// deixa tudo em caixa baixa, não modifica a string principal

	// toUperCase()
		// deixa tudo em caixa alta, não modifica a string principal