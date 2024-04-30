// function criaPessoa (nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Abner', 'Dominique', 20);
// const pessoa2 = criaPessoa('Maria', 'Fernanda', 15);
// const pessoa3 = criaPessoa('Davi', 'Fernando', 10);
// const pessoa4 = criaPessoa('Nane', 'Oliveira', 35);
// const pessoa5 = criaPessoa('Marlene', 'Albertoni', 50);

// console.log(pessoa1.nome, pessoa1.sobrenome);
// console.log(pessoa2);



const pessoa1 = {
    nome: 'Abner',
    sobrenome: 'Dominique',
    idade: 20,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// console.log(pessoa1.nome);