var clubes = [
    "Santos",
    "Palmeiras",
    "São Paulo",
    "Bahia",
    "Vasco"
];

//definindo uma função
function imprimir(clubes, indice){
    console.log(indice + ' - ' + clubes);
}

// 3 formas de fazer a mesma coisa.

//forEach (para cada)
clubes.forEach(imprimir);//para cada elemento dentro do array, imprima.


//utilização de função anonima(lambda/callback) e template string
clubes.forEach(function(clubes, indice){
    console.log(`${indice} - ${clubes}`);//template string
})

//for
for(var i = 0; i < clubes.length; i++){
    console.log(i + ' - ' + clubes[i])
}