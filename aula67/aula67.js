// Reduce - Reduzindo o array (video aula 86)

// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0  1    2  3  4  .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Proposito do Reduce
// Exemplo do professor pra gente conseguir entender
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
// }, 0);

// console.log(total);

// Jeito mais curto de ser resolvido (Deu certo, feito por mim Abner)
const total = numeros.reduce((acumulador, valor) => acumulador += valor, 0);
// console.log(total);




// Usando o Reduce como se fosse um Filter
// (ATENÇÃO! NA PRÁTICA NÃO FAÇA ISSO)
// const numerosPares = numeros.reduce(function(acumulador, valor) {
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// console.log(numerosPares);


// Usando o Reduce como se fosse um Map 
// (ATENÇÃO! NA PRÁTICA NÃO FAÇA ISSO)
// const dobro = numeros.reduce(function(acumulador, valor) {
//     acumulador.push(valor * 2);
//     return acumulador;
// }, []);

// console.log(dobro);






// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 105},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 1000},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha);
