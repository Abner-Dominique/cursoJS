// Jeito que eu resolvi o problema! Depois temos o jeito que o professor resolveu
/* function myScopo () {
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]

    for (let i = 0; i < elementos.length; i++){
        const { tag, texto } = elementos[i];
        setResultado(tag, texto);
    }

    function criaElemento (elemento) {
        const e = document.createElement(`${elemento}`);
        return e;
    }

    function setResultado (e, msg) {
        const resultado =  document.querySelector('.container');
        resultado.innerHTML += '';
        const elemento = criaElemento(e);
        elemento.innerHTML = msg;
        resultado.appendChild(elemento);
    }
}
myScopo(); */

// Jeito que o professor resolveu o problema

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    const { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);