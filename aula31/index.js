const verdadeira = true;

// Let só tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = 'Abner'; // criando
var nome2 = 'Abner';

if (verdadeira) {
    let nome = 'Dominique'; // criando 
    var nome2 = 'Dominique' // Redeclarada

    if (verdadeira) {
        var nome2 = 'Ronaldo' // Redeclarada
        let nome = 'outra coisa';
        // console.log(nome, nome2);
    }
}

console.log(nome, nome2);


// function falaOi () {

//     if (verdadeira) {
//         let nome = 'Luiz';
//         var sobrenome = 'Miranda';
//     }

//     console.log(sobrenome);
// }

// falaOi();

// let sobrenome = 'Oliveira';
// console.log(sobrenome);
