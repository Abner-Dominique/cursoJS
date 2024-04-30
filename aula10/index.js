/*
 * Aritméticos
 * + Adição / Concatenação
 *  - Subtração
 *  * multiplicação
 *  / divisão
 *   ** Potenciação
 *  % Resto da divisão
 * 
 *  Precedência dos operadores:
 *  ()
 *  **
 *  /, * e %
 *  + e -
 * 
 *  Incremento = ++
 *  Decremento = --
 * 
 * */
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2, num1 * num2, num1 / num2, num1 - num2, num1 ** num2);
console.log(num1 % num2);
console.log(num1 * num2 / num3);

const num4 = '10';
console.log(num3 + num4);

// Operadores de incremento e decremento
const passo = 2;
let contador = 2;
contador *= passo;
console.log(contador);
//contador = contador + passo;
//console.log(contador);
//contador += passo;
//console.log(contador);

//contador++; //2
//contador++; //3
//++contador; //4
//++contador; //5
//console.log(contador);
//console.log(contador++);
//console.log(contador);
//console.log(++contador);

let contador2 = 10;
console.log(--contador2);
console.log(--contador2);

// NaN - Not a Number
const n1 = 10;
const n2 = 'Abner';
console.log(n1 * n2);

// parseInt(inteiro), parseFloat(decimais) e Number(tanto inteiros como decimais)
const n3 = 10;
const n4 = Number('5.2');
console.log(n3 + n4);
