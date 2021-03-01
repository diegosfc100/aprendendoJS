// Função tradicional
    // const double = function (number) {
    //    return number * 2
    // }


// ARROW FUNCTION
    const double = (number) => {
        return number * 2 
    }

    // forma simplificada
    const double = (number = 0) => number * 2 



// FOREACH e CALLBACK
    const myFunc = callback => {
        const value = 77

        callback(value)
    }


    myFunc(number => {
    console.log(number)
    })


    const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

    const logArrayInfo = (socialNetwork) => {
        console.log(socialNetwork)
    }

    socialNetworks.forEach(logArrayInfo)


    // Utilizando callbacks
    const ul = document.querySelector('[data-js="ul"]')

    let HTMLTemplate = ''

    const generateHTMLTemplate = socialNetwork => {
    HTMLTemplate += `<li>${socialNetwork}</li>`
    }

    socialNetworks.forEach(generateHTMLTemplate)

    ul.innerHTML = HTMLTemplate

/*
   RESUMO/ANOTAÇÕES:
      - Arrow functions fornecem uma sintaxe mais simples para declarar funções
      - Funções podem receber como argumento outras funções e também retornar funções
      - Quando uma função é passada para outra como argumento, chamamos essa função de callback
      - Callbacks são utilizados para executar diferentes funções para o mesmo valor, em situações diferentes
      - forEach é um método que itera sobre um array e executa uma função de callback para cada item do array
*/