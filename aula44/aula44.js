// Tratando e lançando erros (try, catch, throw) - Video Aula 63

/* try {
    console.log(naoExisto);
} catch (err) {
    console.log('naoExisto não existe.');
    console.log(err); // JAMAIS FAÇA ISSO, NÃO MOSTRE OS ERROS INTERNOS PROS USUÁRIOS
} */

function soma(x, y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
        ) {
        throw new Error('X e Y precisam ser números.');
    }

    return x + y;
}

try {
    console.log(soma(10, 5));
    console.log(soma('1', 5));
} catch (error) {
    console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.')
}