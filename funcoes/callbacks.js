// Callback é uma função passada como parâmetro para outra função.
// Callbacks são passadas como funções para serem executadas após um certo evento. 

let front = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Wordpress"
]

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`)
}
// aqui está ocorrendo o callback.
front.forEach(apresentar); 


//Lambda - aqui está ocorrendo o callback.
front.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`)
})


//Arrow Funtion - aqui está ocorrendo o callback.
front.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`))


//

