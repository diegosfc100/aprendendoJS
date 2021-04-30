// REGEX - continuação...

	// \s verifica os espaços em branco
	// \n verifica as quebras de linha
	// \t verifica as tabulações(tab)
	// . verifica qualquer caractere exceto quebra de linha


	// Negação
		// ^ nega a sequencia, por exemplo diz que a verificação pode ser feita com todos os itens menos o que está na lista
        	text.match(/[^abc]/);
		// a negação pode ser feita também com as letras maiúsculas \W \D \S
		// Para pegar todos os caracteres de uma sentença
			text.match(/[\S\s]/);


	// Repetidores
		// As expressões regulares só fazem o casamento de um único caractere, para fazer a repetição basta utilizar {n,m} com n sendo 'ao menos n vezes' e no méximo 'm' vezes.
			\d{2,4} // um número entre 2 e quatro caracteres

		// Intervalo aberto, repete ao menos n vezes até o infinito
			\s{2,}

		// Repete exatamente n vezes
			\w{2}

		// Caractere opcional ?		
			\d\d\d? //terceiro caractere opcional

		// Caractere + uma ou infinitas ocorrencias do item anterior
			s+ // retorna um s ou mais
			\w+ // faz match com as palavras

		//Caractere * zero ou mais ocorrências
			\w*

	// Tratamento de URL
		// para utilizar a barra, como ela é uma notação reservada da regexp, você deve colocar uma barra invertida antes dela. Isso deve ser feito com o '.' também
		'url'.match(/https?:\/\/\w+[.\w]+/);

	// Tratamento de email
		'email'.match([\w+]+@\w+\.\w+([.\w+]));