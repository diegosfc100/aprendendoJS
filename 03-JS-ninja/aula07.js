// Operador módulo
	// resto da divisão entre dois números
	3 / 3 = 1
	3 % 3 = 0
	5 % 2 = 1
	
// Length
	// Conta a quantidade de caracteres de uma string ou a quantidade de itens de um array
	var arr = [1, 3, 4, 5, 6];
	arr.length -> 5
	
// Push
	// Adiciona itens ao final do Array
	arr.push(7, 8, 9);
	arr.push({carro:'BMW'});

// For
	// O for utiliza uma variável, uma condição de parada e um incremento ou decremento
	for ( i = 0; i < 3; i++ ){
		console.log( i );
	}
	
	// Podem ser declaradas mais de uma variável
	for ( i = 0, j = 10; i < 3, j < 10 ; i++, j-- ){
		console.log( i );
		console.log( j++ );
	}
	
	// As expressões podem não ser todas usadas, porém os ';' tem que ser mantidos
	for( i = 0 ; ; i-- ){}
	for( ; i > 3;  ){}
	for( ; ; ){} // Loop Infinito