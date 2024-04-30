// Parâmetros da função (video aula 69)


// argumentos que sustenta todos os argumentos enviados
// function funcao (a, b, c) {
//     let total =0;
//     for (let argumento of arguments){
//         total += argumento;
//     }

//     console.log(total, a, b, c);
// }

// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);



// function funcao(a, b = 2, c = 2) {
//     // b = b || 0;
//     console.log(a + b + c);
// }
// funcao(2, undefined, 10);

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }
// // funcao({nome: 'Abner', sobrenome: 'Dominique', idade: 20});
// let obj = {nome: 'Abner', sobrenome: 'Dominique', idade: 20};
// funcao(obj);

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Abner', 'Dominique', 20]);

// function conta(operador, acumulador, ...numeros) {
//     // console.log(operador, acumulador, numeros);
//     for (let numero of numeros) {
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '/') acumulador /= numero;
//         if(operador === '*') acumulador *= numero;
//     }

//     console.log(acumulador);
// }
// conta('+', 1, 20, 30, 40, 50);

// const conta = function(operador, acumulador, ...numeros) {
//     // console.log(operador, acumulador, numeros);
//     for (let numero of numeros) {
//         if(operador === '+') acumulador += numero;
//         if(operador === '-') acumulador -= numero;
//         if(operador === '/') acumulador /= numero;
//         if(operador === '*') acumulador *= numero;
//     }

//     console.log(acumulador);
// };
// conta('+', 1, 20, 30, 40, 50);

// const conta = (operador, acumulador, ...numeros) => {
//     console.log(operador, acumulador, numeros);
// };
// conta('+', 1, 20, 30, 40, 50);


const conta = (...args) => {
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);