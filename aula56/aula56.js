//  Funções fábrica (Factory Functions) (Video Aula 75)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        fala(assunto = 'nada') {
            return `${this.nome} está falando sobre ${assunto}.`;
        },

        altura,
        peso,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Abner', 'Dominique', 1.76, 76);
const p2 = criaPessoa('José', 'Dominique', 1.90, 57);
const p3 = criaPessoa('Abner', 'Dominique', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


// p1.nomeCompleto = 'Maria Oliveira Silva';
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());


// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);


// const p2 = criaPessoa('Maria', 'Clara', 1.67, 60);
// console.log(p2.fala('React'));
// console.log(p2.imc());