// Aula de exercícios (video aula 60)

// Escreva uma função que recebe 2 números e retorne o maior deles

// JEITO QUE EU RESOLVI O PROBLEMA | ABAIXO DO MEU EXEMPLO TEMOS O JEITO QUE O PROFESSOR RESOLVEU
/* let numero = maiorNumber(2, 2);
console.log(numero);

function maiorNumber (x, y) {
    if (x > y) return x;
    return y;
} */

// JEITO QUE O PROFESSOR RESOLVEU O PROBLEMA

/* function max(x, y) {
    return x > y ? x : y; // utilizando operação ternária
} */


// RESOLVENDO COM OPERAÇÃO TERNÁRIA MAIS ARE FUNCTION, DESTE MODO COMO TEMOS SÓ UMA LINHA PODEMOS REMOVER AS CHAVES E A PALAVRA RETURN QUE FICA IMPLICITA

const max2 = (x, y) => x > y ? x : y; // versão final
console.log(max2(20, 4));