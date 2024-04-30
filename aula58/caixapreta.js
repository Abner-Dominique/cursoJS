function Caixa() {
    this.piloto = "";
    this.copiloto = "";
    this.dados = [];
    this.liga = false;

    this.ligaDesliga = function(ligado, piloto, copiloto) {
        if (ligado) {
            this.liga = true;
            this.piloto = piloto;
            this.copiloto = copiloto;
        } else {
            this.exibi();  // Corrigido para chamar o método exibi() usando this
        }
    };

    this.armazena = function(tempo, altura, velocidade) {
        if (this.liga === false) {
            console.log("A caixa precisa estar ligada");
            return;
        }

        const dado = {
            'Piloto: ': this.piloto,
            'Copiloto: ': this.copiloto,
            'Tempo': tempo,
            'Altura': altura,
            'Velocidade': velocidade
        };

        this.dados.push(dado);  // Corrigido para usar push() em vez de append()
        console.log("Armazenado: " + (this.dados.length - 1));
    };

    this.exibi = function() {  // Corrigido para tornar exibi uma função do objeto
        for (const dado of this.dados) {
            console.log(dado);
        }
    };
}

const caixa01 = new Caixa();
caixa01.ligaDesliga(true, "Abner", "Dominique");
caixa01.armazena(10, 10000, 800);
caixa01.ligaDesliga(false, "Abner", "Dominique");
