/* Pedir para o usuário digitar dois números e mostrar uma msg informando
se foi aprovado ou não. A nota de corte é 5. */



























// O EXERCÍCIO RESOLVIDO ESTÁ LOGO ABAIXO, RESOLVA PRIMEIRO E DEPOIS COMPARE. //


var n1 = parseFloat(prompt("Digite sua primeira nota: "))
var n2 = parseFloat(prompt("Digite sua segunda nota: "))

var media = (n1 + n2) / 2

if(media >= 5){
    alert("Você foi aprovado com a nota media de " + media)
}else{
    alert("Você foi reprovado com a nota média de " + media)
}