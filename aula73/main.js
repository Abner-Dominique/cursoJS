// Métodos úteis para objetos (Video aula 91)

/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// const produto = { nome: 'Produto', preco: 1.8};
// const caneca = Object.assign({}, produto, {material: 'porcelana' })

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana'};
// console.log(Object.values(produto));
// console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'qualquer outra coisa' 
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'Outra coisa';
// console.log(produto);

// Object.freeze(produto);
// produto.nome = 'Outra nome';
// const caneca = {nome: produto.nome, preco: produto.preco};

// console.log(produto);

// console.log(Object.keys(produto));

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// const produto = { nome: 'Produto', preco: 1.8};
// const caneca = { 
//     ...produto,
//     material: 'porcelana'
// };

