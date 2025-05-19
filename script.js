class Parquimetro {
      constructor() {
        this.opcoes = [
          { preco: 3.00, tempo: 120 }, // 2 horas
          { preco: 1.75, tempo: 60 },  // 1 hora
          { preco: 1.00, tempo: 30 },  // 30 minutos
        ];
      }

      calcular(valorInserido) {
        let tempoTotal = 0;
        let valorRestante = parseFloat(valorInserido.toFixed(2));

        for (let opcao of this.opcoes) {
          while (valorRestante >= opcao.preco) {
            valorRestante -= opcao.preco;
            valorRestante = parseFloat(valorRestante.toFixed(2)); 
            tempoTotal += opcao.tempo;
          }
        }

        return {
          tempo: tempoTotal,
          troco: valorRestante
        };
      }

      formatarTempo(minutos) {
        const horas = Math.floor(minutos / 60);
        const mins = minutos % 60;
        return `${horas}h ${mins}min`;
      }
    }

    function recebevalor() {
      const valor = parseFloat(document.getElementById('valorPago').value);
      const parquimetro = new Parquimetro();
      
      if (isNaN(valor) || valor <= 0.99) {
        document.getElementById('resultado').innerText = 'Valor insuficiente.';
        return;
      }

      const resultado = parquimetro.calcular(valor);
      const tempoFormatado = parquimetro.formatarTempo(resultado.tempo);
      document.getElementById('resultado').innerText = 
        `Tempo adquirido: ${tempoFormatado} | Troco: R$ ${resultado.troco.toFixed(2)}`;
    }