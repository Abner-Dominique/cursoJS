// Revisando objetos (video aula 89)

// Factory functions / Constructor functions / Classes

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // travando todos os objetos que vierem dessa constructor
    // Object.freeze(this);
}

// p1 = (ENDEREÇO DE MEMÓRIA) -> 'Valor'
//isso pode -> p1.ENDERECODEMEMORIA = {nome: 'Outra coisa'}
// isso não pode -> p1 = (NOVO ENDEREÇO DE MEMÓRIA)
const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'teste';
// Caso eu queira travar meu objeto posso fazer isso:
// Object.freeze(p1);
// Agora posso fazer qualquer coisa que não alterará
p1.nome = 'Outra coisa';
p1.fala = function() { console.log('Oi');};
p1.fala();
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);


// function criaPessoa (nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);


// 
// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

// const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa['sobrenome']);

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return (`Oi meu nome é ${this.nome}`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// console.log(pessoa1.getDataNascimento());
// console.log(pessoa1.falarNome());

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }


// const pessoa2 = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };


// delete pessoa1.nome;
// console.log(pessoa1);

// console.log(pessoa1, pessoa2);

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);
