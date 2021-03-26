// Use strict
	// diretiva, deve utiliza-la no escopo que você quer que seja restrito, pois ele não irá permitir a criação de variáveis sem o 'var'
	(function(){
		'use strict';
		var myName = 'Clara';
		console.log(myName); // Clara
	})();
	console.log(myName); // erro pois a variável myName está em escopo local
	// Sem o 'var' ele aponta o erro para dentro da função, para que você adicione o 'var'.
	(function(){
		'use strict';
		myName = 'Clara';
		console.log(myName);
	})();
	console.log(myName);
	// with
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

	// Global this
		(function(){
			'use strict'
			function Person( name, lastName, age ){
		        this.name = name;
		        this.lastName = lastName;
		        this.age = age;
		    }
			console.log( new Person( 'Clara', 'Verena', 20 ) ); // este é o jeito correto de chamar, instanciando
			console.log( Person( 'Clara', 'Verena', 20 ) ); // não instanciando, utilizando como função, você irá receber undefined, o this global retorna nesse valor. O 'use strict' não irá permitir isso.
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