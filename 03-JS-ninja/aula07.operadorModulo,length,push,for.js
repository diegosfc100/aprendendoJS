// OPERADOR MÓDULO
	// resto da divisão entre dois números
	var a = 3 % 3 // 0
	var b = 5 % 2 // 1

	//imprimindo números impares
	num = 0;

	while( num < 20){
		num % 2  === 1 ? console.log(num) : '';
		num++;
	}


	
// .LENGTH
	// conta a quantidade de caracteres de uma string ou a quantidade de itens de um array
	var arr = [1, 3, 4, 5, 6, {nome: 'Diego', idade: 30}];
	arr.length // 5
	


// .PUSH
	// Adiciona itens ao final do Array
	arr.push(7, 8, 9);
	arr.push({carro:'BMW'});
	console.log(arr);


	//adicionando função ao array
	arr.push(function soma (x, y){ return x + y})
	console.log(arr);

	//acessando função adicionada
	console.log(arr[10](50, 50));


// FOR
	// O for utiliza uma variável, uma condição de parada e um incremento ou decremento
	for ( i = 0; i < 3; i++ ){
		console.log(i);
	}
	
	// Podem ser declaradas mais de uma variável
	for ( i = 0, j = 10; i < 3, j < 10 ; i++, j-- ){
		console.log(i);
		console.log(j++);
	}
	
	// As expressões podem não ser todas usadas, porém os ';' tem que ser mantidos
	for(i = 0; ;i-- ){}
	for( ; j > 3;  ){}
	for( ; ; ){} // Loop Infinito