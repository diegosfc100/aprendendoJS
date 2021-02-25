// FOR
    /* 
    for(inicialização; condição; expressão final){
        declaração; 
    } 
    */

    //exemplo1:
    for (let i = 0; i < 5; i++) {
            console.log(i);
    }

    //exemplo2:
    const names = ['Ada', 'Bill', 'Steve'];

    for (let i = 0; i < names.length; i++) {
         const pessoas = `Pessoas revolucionárias: ${names[i]}`;
        
         console.log(pessoas);
      }



// WHILE
    /*
    while (condição) {
        rotina
        } 
    */

    //exemplo1:
    let i = 0;

    while (i < 3) {
        console.log(i);
        i++;
    }

    //exemplo2:
    const nomes = ['João', 'Maria', 'Luiz'];
    const idades = [29, 44, 35];

    let j = 0;

    while (j < nomes.length) {
        console.log(`${nomes[j]} tem ${idades[j]} anos`);
        j++;
    }