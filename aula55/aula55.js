// Funções imediatas (IIFE -> Immediately invoked function expression) (Video aula 74)

(function (idade, peso, altura) {
    const nome = 'Abner';

    const sobrenome = 'Dominique'

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome(nome));
    }

    falaNome();
    console.log(idade, peso, altura);

}) (20, 76, 1.76);

const nome = 'Qualquer coisa';
console.log(nome);
