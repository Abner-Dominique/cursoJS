// Closures (video aula 72)

// Global
function retornaFuncao(nome) {
    // const nome = 'Abner';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Abner');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());