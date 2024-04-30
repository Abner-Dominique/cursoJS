// Escopo léxico (video aula 71)

const nome = 'Abner';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Dominique';
    falaNome();
}

usaFalaNome();