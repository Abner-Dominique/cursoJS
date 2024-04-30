// Aula sobre While e Do While (video aula 58)

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
// console.log(rand);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('###########');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);


// const nome = 'Abner'
// let i =0;

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }