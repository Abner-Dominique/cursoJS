/*
// ECMScript 2015 (ES6) JavaScript
var nome = 'Abner'; //NÃO USE VAR
var nome = 'Dominique'; // NÃO USE VAR

console.log(nome);

nome = 'Oliveira'; // NÃO FAÇA ISSO

let nome = 'Poquiviqui'; //USE LET OU CONST
*/

// Aula 19 - Tipos de dados primitivos
// String, number, undefined, null, boolean, (symbol = por enquanto não vamos ver isso)
const nome = 'Abner'; // string
const nome1 = "Abner"; // string
const nome2 = `Abner`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // nulo -> não aponta pra local nenhuma na memória
const aprovado = false; // Boolean = pode ser true ou false (lógico)

//console.log(typeof aprovado, aprovado);

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2