function meuEscopo() {
    const form = document.querySelector('.form');

    function recebeEventoForm(e) {
        e.preventDefault();

        const peso = e.target.querySelector('#input-teste-1');
        const altura = e.target.querySelector('#input-teste-2');

        const pesoNumero = Number(peso.value);
        const alturaNumero = Number(altura.value);

        if (isNaN(pesoNumero) || peso.value.trim() === '') {
            setResultado('Peso inválido!', false);
            form.reset();
            return;
        }  
        
        if (isNaN(alturaNumero) || altura.value.trim() === '') {
            setResultado('Altura inválida!', false);
            form.reset();
            return;
        }

        const imc = getImc(pesoNumero, alturaNumero);
        const nivelImc = getNivelImc(imc);

        const msg = `Seu IMC é ${imc} (${nivelImc}).`;

        setResultado(msg, true);
    }

    function getNivelImc (imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 40) return nivel[5];

        if (imc >= 35) return nivel[4];
        
        if (imc >= 30) return nivel[3];
        
        if (imc >= 25) return nivel[2];
        
        if (imc >= 18.5) return nivel[1];
        
        if(imc < 18.5) return nivel[0];        
    }

    function getImc (peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }

    function criaP () {
        const p = document.createElement('p');
        return p;
    }

    function setResultado (msg, isValid) {
        const resultado = document.querySelector('.exibiResultado');
        resultado.innerHTML = '';
        const p = criaP();
        if (isValid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('bad');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();