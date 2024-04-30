// Object.defineProperty() e Object.defineProperties() (Video Aula 90)

function Produto (nome, preco, estoque ) {
    this.nome = nome;
    this.preco = preco;

    // Usado para configurar apenas uma chave
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: false // configurável
    });

    // Usado para configurar várias chaves
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configurável

        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configurável
        }
        // estoque: {
        //     enumerable: true, // mostra a chave
        //     value: estoque, // valor
        //     writable: false, // pode alterar
        //     configurable: false // configurável
        // }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}
