// Operação ternária ->  ? :
// (condição) ? 'Valor para condição verdadeira' : 'Valor para condição falsa'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000){
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuario normal');
// }