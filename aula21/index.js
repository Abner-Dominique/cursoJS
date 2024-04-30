/* 
Operadores de comparação 
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) ******* não se recomenda usar // Não tem nada haver com "=" pois "=" significa outra coisa(= atribuição)

=== igualdade estrita (valor e tipo)
!= diferente ************* não se recomenda usar
!=== diferente estrito (valor e tipo)
*/

const num1 = 10; // number
const num2 = '10'; // string
const comp = num1 !== num2;
console.log(comp);


//POR QUE NÃO USAR OS  NÃO RESTRITOS, PORQUE QUANDO COMPARAMOS COM STRINGS ELES VÃO RETONAR VERDADEIRO SENDO QUE ERA PRA SER FALSO

// const num1 = 10; // number
// const num2 = '10'; // string
// const comp = num1 != num2;
// console.log(comp);


// const num1 = 10; // number
// const num2 = '10'; // string
// const comp = num1 == num2;
// console.log(comp);
