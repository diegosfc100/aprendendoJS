function calcular_idade(ano_nascimento){
    const data = new Date(); //gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

const minhaIdade = calcular_idade(1990);
console.log(`Eu tenho ${minhaIdade} anos.`);

//

const data = new Date();
console.log(`Data de hoje: ${data}`);
console.log(`Ano: ${data.getFullYear()}`)

//

function teste (a1, a2){
    return a1 + a2;
}

console.log(teste(50, 45, 7, 6, 8)); // JS não retornara erro caso voce informe mais parametros do que o necessario,
// mas ele só usava o que ele espera.