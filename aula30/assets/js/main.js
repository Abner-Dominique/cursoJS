// // Jeito que eu resolvi o problema
// function myScop() {
//     const data = new Date();
//     formataData(data);
    
//     function formataData (data) {
//         const diaSemana = getDiaSemanaTexto (data);
//         const diaMes = data.getDate();
//         const mes = getNameMon(data);
//         const ano = zeroAEsquerda(data.getFullYear());
//         const hora = zeroAEsquerda(data.getHours());
//         const min = zeroAEsquerda(data.getMinutes());

//         const msg = `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${hora}:${min}`
//         setExibicao(msg);
//     }

//     function zeroAEsquerda (num) {
//         return num >= 10 ? num : `0${num}`;
//     }

//     function getDiaSemanaTexto(data) {
//         const diaSemana = data.getDay() + 1;
//         let diaSemanaTexto;

//         switch (diaSemana) {
//             case 1:
//                 diaSemanaTexto = 'Domingo';
//                 return diaSemanaTexto;
//             case 2:
//                 diaSemanaTexto = 'Segunda-feira';
//                 return diaSemanaTexto;
//             case 3:
//                 diaSemanaTexto = 'Terça-feira';
//                 return diaSemanaTexto;
//             case 4:
//                 diaSemanaTexto = 'Quarta-feira';
//                 return diaSemanaTexto;
//             case 5:
//                 diaSemanaTexto = 'Quinta-feira';
//                 return diaSemanaTexto;
//             case 6:
//                 diaSemanaTexto = 'Sexta-feira';
//                 return diaSemanaTexto;
//             case 7:
//                 diaSemanaTexto = 'Sábado';
//                 return diaSemanaTexto;
//             default:
//                 diaSemanaTexto = ''
//                 return diaSemanaTexto;
//         }
//     }

//     function getNameMon(data) {
//         const mes = data.getMonth() + 1;
//         let mesTexto;
//         switch (mes) {
//             case 1:
//                 mesTexto = 'Janeiro';
//                 return mesTexto;
//             case 2:
//                 mesTexto = 'Fevereiro';
//                 return mesTexto;
//             case 3:
//                 mesTexto = 'Março';
//                 return mesTexto;
//             case 4:
//                 mesTexto = 'Abril';
//                 return mesTexto;
//             case 5:
//                 mesTexto = 'Maio';
//                 return mesTexto;
//             case 6:
//                 mesTexto = 'Junho';
//                 return mesTexto;
//             case 7:
//                 mesTexto = 'Julho';
//                 return mesTexto;
//             case 8:
//                 mesTexto = 'Agosto';
//                 return mesTexto;
//             case 9:
//                 mesTexto = 'Setembro';
//                 return mesTexto;
//             case 10:
//                 mesTexto = 'Outubro';
//                 return mesTexto;
//             case 11:
//                 mesTexto = 'Novembro';
//                 return mesTexto;
//             case 12:
//                 mesTexto = 'Dezembro';
//                 return mesTexto;
//             default:
//                 mesTexto = ''
//                 return mesTexto;
//         }
//     }

//     function criaHUm () {
//         const hUm = document.createElement('h1');
//         return hUm;
//     }

//     function setExibicao (msg) {
//         const section = document.querySelector('.container');
//         section.innerHTML = '';
//         const hUm = criaHUm();
//         hUm.innerHTML = msg;
//         section.appendChild(hUm);
//     }

// }
// myScop();

// Jeito fácil de resolver o problema, só bastava ler a documentação
//Esse debaixo seria o "Jeito certo" de resolver o problema

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});


// Jeito que o professor resolveria sem utilizar o case caso não tivesse a solução de cima

// function getDiaSemanaTexto(data) {
//     const diaSemana = data.getDay();
//     const diaSemanaTexto = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
//     return diaSemanaTexto[diaSemana];
// }