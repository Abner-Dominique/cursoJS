// Métodos úteis para Promises (video aula 109)

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject ('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
        return; // Esse return é redundante porque pra baixo não tem mais código
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

function baixaPagina() {
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));


// const promises = [
//     // 'Primeiro valor',
//     esperaAi(1000, rand(1, 3)),
//     esperaAi('Promise 1', rand(1, 3)),
//     esperaAi('Promise 2', rand(1, 3)),
//     esperaAi('Promise 3', rand(1, 3)),
//     // 'Outro valor'
// ];

// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });

// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro){
//         console.log(erro);
//     });