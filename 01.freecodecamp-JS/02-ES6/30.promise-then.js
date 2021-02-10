/* Lidar com uma promessa cumprida com then

As promessas são mais úteis quando você tem um processo que leva uma quantidade desconhecida de tempo em seu código
(ou seja, algo assíncrono), geralmente uma solicitação do servidor. Quando você faz uma solicitação ao servidor, 
leva algum tempo e, depois que ela é concluída, você geralmente deseja fazer algo com a resposta do servidor. 
Isso pode ser conseguido usando o método then. O método then é executado imediatamente após sua promessa ser cumprida 
com determinação. Aqui está um exemplo: */

myPromise.then(result => {
    // do something with the result.
  });

/* result vem do argumento dado ao método de resolução.

Adicione o método then à sua promessa. Use result como o parâmetro de sua função de retorno de chamada e
registre o resultado no console. */

  const makeServerRequest = new Promise((resolve, reject) => {

    makeServerRequest.then(result => {
        
      })
      let responseFromServer = true;
        
      if(responseFromServer) {
        resolve("We got the data");
      } else {  
        reject("Data not received");
      }
    });
    
    makeServerRequest.then(result => {
          console.log(result)
      })