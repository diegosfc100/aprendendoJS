var idade = 20

if (idade >= 18){ // se idade for maior ou igual a 18 ..
    console.log("Maior de idade."); // imprima "maior de idade"
}else{ // senão
    console.log("Menor de idade."); // imprima "menor de idade".
}
//obs: também conhecido como Operação Ternária.

// Outro modo:
console.log(idade >= 18 ? "Maior de idade." : "Menor de Idade");

//

if (idade <= 14){ // se idade for menor ou igual a 14 ..
    console.log("Criança"); // imprima "crinça".
} else if ( idade > 14 && idade < 18){ // senão se idade for maior q 14 e menor q 18..
    console.log("Adolescente") // imprima "adolescente"
} else { // senão..
    console.log("Adulto") // imprima "adulto"
}

//

// Dica:
if (1 == "1"){
    console.log("Sim.")
} else {
    console.log("Não.")
} 


if (1 === "1"){
    console.log("Sim")
} else {
    console.log("Não.")
} 

// (==) verifica valor.
// (===) verifica valor E tipo de dado.

//SWITCH:

var sexo = "g";

switch(sexo){
    case "m": // caso o valor da variavel 'sexo' seja 'm'..
        console.log("Masculino."); // imprima 'masculino
        break; // sair caso tenha encontrado o valor.
    case "f":
        console.log("Feminino.");
        break;
    default: // caso nao seja nem 'm' nem 'f' ..
        console.log("Desconhecido"); // imprima 'desconhecido'
        break;
}

//

var s = "m"; // variavel 's' com valor string 'm'.
var masculino; // variavel 'masculino' sem valor.

if (s === "m"){ // se a varialvel 's' tiver o mesmo valor e tipo de dado de 'm' ..
    masculino = true; // variavel masculino recebera o valor 'true'.
}else{
    masculino = false;
}
console.log(masculino)

// Simplificando:
var masc = (s === "m");
console.log(masc);



