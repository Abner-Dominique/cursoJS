// const nome = 'Abner';
// const sobrenome = 'Dominique';

// const falaNome = () => `${nome} ${sobrenome}`;

// // console.log(module);

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// exports.Pessoa = Pessoa;

const nome = 'Abner';
const sobrenome = 'Dominique';

// module.exports = {
//   nome, sobrenome, Pessoa
// };

exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa';