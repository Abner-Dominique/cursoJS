// Criando classes (video aula 102)

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`);
    }

    comer(){
        console.log(`${this.nome} está comendo.`);
    }

    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
};

const p1 = new Pessoa('Abner', 'Dominique');
const p2 = new Pessoa2('Abner', 'Dominique');
console.log(p1);
console.log(p2);
