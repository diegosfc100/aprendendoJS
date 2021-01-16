// Tratamento de Erros.

try{
    console.log(nome);
}catch(err){
    console.log("não possível imprimir nome.");
    console.log(err.name); //opcional
    console.log(err.message); //opcional
}

//Lançando erros
function dividir(num1, num2){
    if (num1 === 0 || num2 === 0){
        throw("Os valores devem ser positivos.")//lançando exceção(erro)
    }else{
        return num1 / num2
    }
}

try{
    let ret = dividir(10, 2);
    console.log(ret);
}catch(e){
    console.log('Não foi possível dividir.')
}finally{
    console.log("Continue...")
}