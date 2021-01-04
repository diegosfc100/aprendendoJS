var curso = "JavaScript"
var legal = true

// AND (&& = ambas expressões precisam ser verdadeiras.)
if(curso === "JavaScript" && legal === true){
    console.log("O curso de JavaScript é legal.")
}else{
    console.log("O curso não e legal.")
}

// OR (|| = pelo menos uma expressão precisa ser verdadeira.)
if(curso === "JavaScript" || legal === true){
    console.log("O curso de JavaScript é legal.")
}else{
    console.log("O curso não e legal.")
}

// NOT (! = quando queremos fazer uma negação)
if(curso != "JavaScript"){ // ==(igual) ; !=(diferente)
    console.log(" O curso não é JavaScript")
}else{
    console.log("O curso é JavaScript.")
}