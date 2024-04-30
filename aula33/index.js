const pessoa = {
    nome: 'Abner',
    sobrenome: 'Dominique',
    idade: 20,
    endereco: {
        rua: 'Av Rondon',
        numero: 320
    }
}

const { nome, sobrenome, ...resto } = pessoa; 
console.log(nome, sobrenome, resto);

// const { 
//     endereco: { rua: r, numero }, 
//     endereco 
// } = pessoa; 
// console.log(r, numero, endereco);

// const { nome, sobrenome, endereco } = pessoa; 
// console.log(endereco);

// Atribuição via desestruturação
// const { nome: n = '', sobrenome, idade } = pessoa; 
// console.log(n, sobrenome);