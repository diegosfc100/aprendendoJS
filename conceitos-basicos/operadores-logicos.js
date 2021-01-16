// AND / OR / NOT

var curso = "JavaScript"
var legal = true

// AND (&& = ambas expressões precisam ser verdadeiras.)
if(curso === "JavaScript" && legal === true){
    console.log("O curso de JavaScript é legal.")
}else{
    console.log("O curso não e legal.")
}

a1 = true  && true       // t && t retorna true
a2 = true  && false      // t && f retorna false
a3 = false && true       // f && t retorna false
a4 = false && (3 == 4)   // f && f retorna false
a5 = 'Cat' && 'Dog'      // t && t retorna "Dog"
a6 = false && 'Cat'      // f && t retorna false
a7 = 'Cat' && false      // t && f retorna false
a8 = ''    && false      // f && f retorna ""
a9 = false && ''         // f && t retorna false


// OR (|| = pelo menos uma expressão precisa ser verdadeira.)
if(curso === "JavaScript" || legal === true){
    console.log("O curso de JavaScript é legal.")
}else{
    console.log("O curso não e legal.")
}

o1 = true  || true       // t || t retorna true
o2 = false || true       // f || t retorna true
o3 = true  || false      // t || f retorna true
o4 = false || (3 == 4)   // f || f retorna false
o5 = 'Cat' || 'Dog'      // t || t retorna "Cat"
o6 = false || 'Cat'      // f || t retorna "Cat"
o7 = 'Cat' || false      // t || f retorna "Cat"
o8 = ''    || false      // f || f retorna false
o9 = false || ''         // f || f retorna ""


// NOT (! = quando queremos fazer uma negação)
if(curso != "JavaScript"){ // ==(igual) ; !=(diferente)
    console.log(" O curso não é JavaScript")
}else{
    console.log("O curso é JavaScript.")
}

n1 = !true               // !t returns false
n2 = !false              // !f returns true
n3 = !'Cat'              // !t returns false