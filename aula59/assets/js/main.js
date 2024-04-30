function Calculadora () {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.apertaEnter();
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.removeUm();
            if(el.classList.contains('btn-eq')) this.conta();
        });
    };

    this.apertaEnter = () => {
        this.display.addEventListener('keyup', e =>{
            if (e.keyCode === 13){
                this.conta();
            }
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';

    this.removeUm = () => this.display.value = this.display.value.slice(0, -1);

    this.conta = () => {
        
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida')
                return
            }

            this.display.value = String(conta);
        } catch(e) {
            alert('Conta inválida!');
            this.display.value = "";
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();