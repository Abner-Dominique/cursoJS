// Filter - Filtrando o array (video aula 84)

// Filter, map, reduce
// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
//               0   1   2  3  4  .......
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Exemplo longo (apenas para entendimento e explicação) de como usar o filter:
// function callbackFilter (valor) {
//     return valor > 10;
// }
// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

// Usando Função anônima (bastante usado)
// const numerosFiltrados = numeros.filter(function (valor) {
//     return valor > 10;
// });
// console.log(numerosFiltrados);


// Função de exemplo apenas pra mostrar como funciona o valor, o indice e o array
// Usando Arefunction(bastante usado)
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array); // Mostrando os valores do indice e array
//     return valor > 10;
// });
// console.log(numerosFiltrados);


// Usando Arefunction Aprimorado (bastante usado)
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
// Jeito que eu resolvi (que é o jeito que  professor falou que é o melhor e mais usado)
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande);

const pessoasComMaisDeCiquentaAnos = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasComMaisDeCiquentaAnos);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);

// Exemplos do professor
// const pessoasComNomeGrande = pessoas.filter(function (obj) {
//     return obj.nome.length >= 7; //Colocamos 7 só pra testar
// });
// console.log(pessoasComNomeGrande);
