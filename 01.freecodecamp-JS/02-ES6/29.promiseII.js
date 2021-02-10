/* Cumpra uma promessa com determinação e rejeição

Uma promessa tem três estados: pending, fulfilled e reject. A promessa que você criou no último desafio está para sempre
presa no estado pendente porque você não adicionou uma maneira de cumprir a promessa. Os parâmetros resolver e rejeitar
dados ao argumento da promessa são usados ​​para fazer isso. resolve é usado quando você deseja que sua promessa seja
bem-sucedida e reject é usado quando você deseja que ela falhe. Esses são métodos que aceitam um argumento, conforme
visto a seguir. */

const myPromise = new Promise((resolve, reject) => {
    if(condition here) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
  });
  

/*O exemplo acima usa strings para o argumento dessas funções, mas pode realmente ser qualquer coisa..
Freqüentemente, pode ser um objeto do qual você usaria dados para colocar em seu site ou em outro lugar.

Faça a promessa lidar com o sucesso e o fracasso. Se responseFromServer for true, chame o método resolve para 
completar a promessa com sucesso. Passe resolver uma string com o valor We got the data.
Se responseFromServer for false, use o método de rejeição e passe a string: Data not received. */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data")
    } else {  
      reject("Data not received")
    }
  });

