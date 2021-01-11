// Destructuring - Extrai dados de uma estrutura para variaveis

const numeros = [5, 10, 15];

const[num1, num2, num3] = numeros; // os valores que estavam no array passaram a ser das variaveis.
console.log(num1,num2,num3);

// podemos descartar valores
const[n1, , n3] = numeros; // descartei o valor 10 e os outros 2 valores fora para as variaveis n1 e n3.
console.log(n1, n3);

// podemos colocar valor default que será usado caso não haja no container
const[a1, a2, a3 = 7, a4 = 99] = numeros;
console.log(a1, a2, a3, a4); // a3 só teria valor 7 caso ele nao existisse no array, igual aconteceu com a4.

//destructuring com objeto
const produto = {
    nome:"nintendo",
    preco:999.00
}

const {nome, preco, jogos = "Mário"} = produto // o objeto 'produto' irá estrair os valores para as varias nome preco e jogos
// as variaveis tem q conter o mesmo nome.
console.log(nome, preco, jogos); 