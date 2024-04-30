// Break e Continue nos laços (video aula 59)
// TEM MAIS EXEMPLOS PRA BAIXO

// Continue  continua para a proxima iteração
// Brek sai do laço



const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {

//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         continue;
//     }

//     console.log(numero);

//     if (numero === 7 ){
//         console.log('7 encontrado, saindo...');
//         break;
//     }

//     // if (numero === 5) {
//     //     continue;
//     // }

// }


// for (let i in numeros) {
//     let numero = numeros[i];

//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         continue;
//     }

//     console.log(numero);

//     if (numero === 7 ){
//         console.log('7 encontrado, saindo...');
//         break;
//     }
// }

// let i = 0;
// while (i < numeros.length) {
//     let numero = numeros[i];

//     if (numero === 2) {
//         console.log('Pulei o número 2');
//         i++;
//         continue;
//     }

//     console.log(numero);

//     if (numero === 7 ){
//         console.log('7 encontrado, saindo...');
//         i++;
//         break;
//     }

//     i++;
// }

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7 ){
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }

    i++;
} while (i < numeros.length);