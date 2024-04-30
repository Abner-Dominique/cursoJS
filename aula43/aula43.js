// Outra aula de um pequeno exercício ( video aula 62 )

// Escreva uma função que recebe um número e 
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100 

function fizzBuzz(x) {
    if(isNaN(x)) return x;

    if(x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if(x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    return x;
}

console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}

// Pensei que fosse pra utilizar essa função kkkk
// function random(min, max) {
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }
// const rand = random (0, 100);
// console.log(rand, fizzBuzz(rand));

