/* 
&& -> Todas as expressões precisam ser verdadeira pra retornar true
        false && true -> false "o valor mesmo"

|| -> Todas as expressões precisam ser falsas pra retornar false
        true || false -> vai retornar "O valor real verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log(a || b || c || d || e);

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao);
// console.log(0 || false || null || 'Abner' || true);


// function falaOi () {
//     return 'Oi';
// }

// const vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaOi());

// console.log('Luiz' && '' && 'Maria');
