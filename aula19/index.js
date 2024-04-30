/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Abner',
    sobrenome: 'Dominique'
}
const b = {...a}; // copiando de modo independente se fosse assim: const b = a era só referênciado

a.nome = 'João';
console.log(a);
console.log(b);


// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Abner');
// console.log(a, c);


// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);