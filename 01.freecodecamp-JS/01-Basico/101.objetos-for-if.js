/* Pesquisa de Perfil

Temos uma série de objetos que representam diferentes pessoas em nossas listas de contatos.
Uma função lookUpProfile que leva o nome e uma propriedade(prop) como argumentos foi pré-escrita para você.

A função deve verificar se o nome é o firstName de um contato real e se a propriedade fornecida (prop) é uma propriedade 
desse contato.

Se ambos forem verdadeiros, retorne o "valor" dessa propriedade.
Se o nome não corresponder a nenhum contato, retorne "No such contact".

Se prop não corresponder a nenhuma propriedade válida de um contato encontrado para corresponder ao nome, 
retorne "No such property". */


var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {

    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}

