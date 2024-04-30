let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/* Maneira que eu resolvi o problema
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;
*/

// Maneira nova
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);