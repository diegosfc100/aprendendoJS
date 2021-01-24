/* Acessando objetos aninhados.

As subpropriedades de objetos podem ser acessadas encadeando a notação de ponto ou colchete.

Aqui está um objeto aninhado: */

var ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  ourStorage.cabinet["top drawer"].folder2;  // "secrets"
  ourStorage.desk.drawer; // "stapler"
  

/* Acesse o objeto myStorage e atribua o conteúdo da propriedade glove box à variável gloveBoxContents.
Use a notação de ponto para todas as propriedades onde possível, caso contrário, use a notação de colchetes. */

// Setup
var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"];