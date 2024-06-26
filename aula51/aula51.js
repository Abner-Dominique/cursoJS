// Aula sobre Retorno da Função - return (video aula 70)

// return
// Retorna um valor
// Termina a função

// function soma(a, b) {
//     return a + b; // isso aqui é útil pois é o retorno
// }

// // console.log(soma(5, 2));

// function soma2(a, b){
//     console.log(a + b); // isso aqui não é útil pois só exibi na tela
// }

// soma2(5, 2);

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red'; // exemplo de fução que não retorna nada
// });                                              // Mas algo de útil

// function criaPessoa(nome, sobrenome){
//     return { nome, sobrenome }
// }

// const p1 = criaPessoa('Abner', 'Dominique');
// const p2 = {
//     nome: 'Maria',
//     sobrenome: 'Das Dores'
// };

// console.log(p1);
// console.log(p2);


// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }

//     return falaResto;
// }

// // const olaMundo = falaFrase('Olá');
// // console.log(olaMundo('mundo!'));

// const fala = falaFrase('Olá');
// const resto = fala('Mundo!');
// console.log(resto);



// function duplica(n) {
//     return n*2;
// }

// function triplica(n) {
//     return n*3;
// }

// function quadriplica(n) {
//     return n*4;
// }

// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));

function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
        return n  * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
