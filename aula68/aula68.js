// Filter + Map + Reduce (Video aula 87)

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const operacao = numeros.filter(valor => valor % 2 === 0 )
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(operacao);

// const numerosPares = numeros.filter(valor => valor % 2 === 0);
// console.log(numerosPares);
// const numerosDobrados = numerosPares.map(valor => valor*2);
// console.log(numerosDobrados);
// const operacao = numerosDobrados.reduce((acumulador, valor) => acumulador += valor, 0);
// console.log(operacao);
