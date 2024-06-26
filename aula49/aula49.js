// As várias maneiras de declarar funções em JS (video aula 68)

// Declaração de função (Function hoisting)
falaOi();

function falaOi(){
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)

// Function expression       podemos ter nome aqui que nem esse mas geralmente não colocamos
const souUmDado = function() {
    console.log('Sou um dado.');
};

// souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow();


// Dentro de um objeto

const obj = {
    // falar: function () {
    //     console.log('Estou falando...');
    // }

    falar () {
        console.log('Estou falando...');
    }
};

obj.falar();