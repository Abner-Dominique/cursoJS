function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 1:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 7:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ''
            return diaSemanaTexto;
    }
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay() + 1;
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

// if (diaSemana === 1){
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 2){
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 3){
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 4){
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 5){
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 6){
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 7){
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = '';
// }

