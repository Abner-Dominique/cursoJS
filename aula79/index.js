// Factory Functions + Prototypes (video aula 100)

/*
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando.`)
        },

        comer(){
            console.log(`${this.nome} está comendo.`)
        },

        beber(){
            console.log(`${this.nome} está bebendo.`)
        },
    }
    
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value:sobrenome }
    });

}

const p1 = criaPessoa('Abner', 'Dominique');
const p2 = criaPessoa('Maria', 'A.');
console.log(p1);
*/

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value:sobrenome }
    });
}

const falar = {
    falar(){
        console.log(`${this.nome} está falando.`)
    },
};

const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`)
    },
};

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`)
    },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber); /* { ...falar, ...comer, ...beber }; */

const p1 = criaPessoa('Abner', 'Dominique');
const p2 = criaPessoa('Maria', 'A.');
console.log(p2);