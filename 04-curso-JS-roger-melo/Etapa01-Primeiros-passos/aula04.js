//BOOLEANS

    // MÉTODOS DE BOOLEANS

    // Includes

        const email = 'diego.sfc100@hotmail.com'
        const feira = ['Abacaxi', 'Maçã', 'Banana'];

        const includesEmail = email.includes('sfc');
        //Includes direto na string retorna true, se alguma parte da string der match com o item solicitado.
        console.log(includesEmail) // true


        const includesFrutas = feira.includes('Abacaxi')
        //Includes em array só retornará true se a palavra inteira der match.
        console.log(includesFrutas); // true


    // Some
        //O método some retorna true se ao menos um item passar na verificação.
        const novasFrutas = ['Limão', 'Uva', 'Cajú'];

        const someNovasFrutas = novasFrutas.some((fruta) => fruta == 'Uva');
        console.log(someNovasFrutas); // true


    // Every
        // O método every testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
        const everyNovasFrutas = novasFrutas.every((fruta) => typeof fruta == "string")
        console.log(everyNovasFrutas); // true



    // COMPARAÇÕES
        // STRING

            // As letras minúsculas tem peso maior na tabela unicode, por isso que são consideradas maiores que as maiúsculas.

            // 'banana' == 'limão';  false
            // 'banana' == 'banana';  true
            // 'banana' == 'Banana';  false
            // 'banana' > 'Banana'; true
            // 'banana' < 'Banana';  false
            // 'banana' <= 'Banana'; false
            // 'banana' >= 'Banana'; true


        // ESTRITA

            // === ou !== Verifica o valor e o tipo na comparação 
            // const age = 30;

            // console.log(age === 30); // true
            // console.log(age === "30"); // false
            // console.log(age !== 30); // false
            // console.log(age !== "30"); // true


// Aula 4-04

// CONVERSÕES DE TIPO

    let numString = '120';

    console.log(numString + 1); // "1201" , concatena.


    // Converter para número com o construtor Number
    numString = Number(numString);
    console.log(numString + 1); // 121


    // Converter para string com o construtor String
    let numberOne = 1;

    numberOne = String(numberOne)
    console.log(numberOne); // "1"


    // Converter para boleano com o construtor Boolean
    let numberTen = 0;

    numberTen = Boolean(numberTen); 
    console.log(numberTen); // false


