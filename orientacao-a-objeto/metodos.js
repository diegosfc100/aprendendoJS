class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){ // a função do metodo get é retornar o valor do atributro.
        return this._nome; //para fazer acesso ao atributo use o THIS.
    }

    set nome(nome){ // o set coloca o valor.
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){ //metodo nao usa a palavra function.
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }
}
  