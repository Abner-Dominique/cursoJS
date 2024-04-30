/*

*/

const nome = 'Abner Dominique';
const sobrenome = 'Poquiviqui';
const idade = 20;
const peso = 75;
const alturaEmM = 1.76;
let indiceMassaCorporal = peso/(alturaEmM*alturaEmM); // peso / (altura * altura)
let anoNascimento = 2023-idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
//template strings
console.log(`tem ${alturaEmM} de altura e seu IMC é ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
