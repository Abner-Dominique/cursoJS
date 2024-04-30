// Método Splice (Video aula 82)

//                -5        -4         -3       -2          -1    
//                 0         1          2        3           4
const nomes = [ 'Abner', 'Dominique', 'de', 'Oliveira', 'Poquiviqui' ];

// Push
// nomes.splice(nomes.length, 0, 'A', 'Lindo');
// console.log(nomes);

// Unshift
nomes.splice(2, 0, 'O', 'Lindo');
console.log(nomes);

// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);
// console.log(nomes, removidos);

// shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// delete
// const removidos = nomes.splice(-1, 1);
// console.log(nomes, removidos);
