// Exercício 2 da série de exercícios curtos ( Video aula 61 )

// Escreva uma função chamada ePaisagem que recebe dois argumentos,
// largura e altura de uma imagem ( number ).
// Retorne true se a imagem estiver no modo paisagem.

// function ePaisagem (largura, altura) {
//     return largura > altura;
// } // versão função normal

const ePaisagem = (largura, altura) => largura > altura; // versão arefunction 

console.log(ePaisagem(60, 40));