// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não pode conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.
const nome = 'João'
console.log(nome);

const primeiroNumero = '5'; //isso é uma string e é diferente de um número que nem no debaixo
const segundoNumero = 10;

// + - * /
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

console.log(typeof (primeiroNumero + segundoNumero)); //pelo fato de o primeiro número ser uma string essa expressão vai dar uma string

