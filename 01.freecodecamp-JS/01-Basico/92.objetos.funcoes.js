/* Coleção de discos.

Você recebe um objeto JSON que representa uma parte de sua coleção de álbuns musicais.
Cada álbum possui um número de identificação exclusivo como sua chave e várias outras propriedades.
Nem todos os álbuns possuem informações completas.

Você começa com uma função updateRecords que pega um objeto como uma coleção, um id, um prop (como um artista ou faixas) 
e um valor. Conclua a função usando as regras abaixo para modificar o objeto passado para a função.

    - Sua função deve sempre retornar o objeto inteiro.
    - Se prop não é uma faixa e value não é uma string vazia, atualize ou defina o prop desse álbum como value.
    - Se prop são faixas, mas o álbum não tem uma propriedade de faixas, crie um array vazio e adicione valor a ele.
    -Se prop for faixas e valor não for uma string vazia, adicione valor ao final da matriz de faixas existente do álbum.
    - Se o valor for uma string vazia, exclua a propriedade prop fornecida do álbum.

Nota: Uma cópia do objeto da coleção é usada para os testes. */

// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

//Resolução:

function updateRecords(object, id, prop, value) {
  
    if(prop !== "tracks" && value !== "") {
      object[id][prop] = value; // Se prop não é uma faixa e value não é uma string vazia, atualize ou defina o prop desse álbum como value.

    }
    else if(prop === "tracks" && value !== "") { //Se prop são faixas, mas o álbum não tem uma propriedade de faixas, crie um array vazio e adicione valor a ele.
      if(!object[id].hasOwnProperty(prop)){
          object[id][prop] = [];
      }
      object[id][prop].push(value); // Se prop for faixas e valor não for uma string vazia, adicione valor ao final da matriz de faixas existente do álbum.
    } 
    
    else{
      delete object[id][prop]; // Se o valor for uma string vazia, exclua a propriedade prop fornecida do álbum.

    }
    
    return object; // Sua função deve sempre retornar o objeto inteiro.

  }

  console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));