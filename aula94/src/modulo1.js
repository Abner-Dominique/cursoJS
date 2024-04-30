/* const nome = 'Abner';
const sobrenome = 'Dominique';
const idade = 20;

function soma(x, y) {
    return x + y;
}

export { nome as nome2, sobrenome, idade, soma }; */

export const nome = 'Abner';
export const sobrenome = 'Dominique';
export const idade = 20;

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// const nome = 'Abner';
// const sobrenome = 'Dominique';
// const idade = 20;

// function soma(x, y) {
//     return x + y;
// }


// export { nome, sobrenome, idade, soma }; 