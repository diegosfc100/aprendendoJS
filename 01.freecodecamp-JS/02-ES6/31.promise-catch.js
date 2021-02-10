/* Lide com uma promise reject com catch

catch é o método usado quando sua promessa foi rejeitada. Ele é executado imediatamente após o método de rejeição
de uma promessa ser chamado. Esta é a sintaxe: */

myPromise.catch(error => {
    //do something with the error.
  });
  

/* error é o argumento passado para o método de rejeição.

Adicione o método catch à sua promessa. Use o erro como o parâmetro de sua função de retorno de chamada e registre
 o erro no console. */

 const makeServerRequest = new Promise((resolve, reject) => {

    makeServerRequest.catch(error => {

    })

    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.catch(error => {
    console.log(error);
  });