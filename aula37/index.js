// Aprendendo sobre for of (video aula - 56)

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const pessoa = {
    nome: 'Abner',
    sobrenome: 'Dominique',
    idade: 20
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


// const nomes = [ 'Abner', 'Dominique', 'Oliveira', 'Poquiviqui' ];

// for (let valor of nomes) {
//     console.log(valor);
// }

// console.log('#######')

// for (let i in nomes) {
//     console.log(nomes[i]);
// }

// console.log('#######')

// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }

// console.log('#######')

// nomes.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array);
// });