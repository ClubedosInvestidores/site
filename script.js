        function calcularJuros() {
            // Obter os valores dos campos
            const capital = parseFloat(document.getElementById('capital').value);
            const taxa = parseFloat(document.getElementById('taxa').value);
            const tempo = parseFloat(document.getElementById('tempo').value);

            // Validar se os valores são válidos
            if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital <= 0 || taxa <= 0 || tempo <= 0) {
                alert('Por favor, insira valores válidos.');
                return;
            }

            // Cálculo de juros simples: J = C * i * t
            const juros = capital * (taxa / 100) * tempo;
            const total = capital + juros;

            // Exibir o resultado
            document.getElementById('resultado').innerHTML = `
        <p><strong>Juros: </strong>R$ ${juros.toFixed(2)}</p>
        <p><strong>Montante Final: </strong>R$ ${total.toFixed(2)}</p>
    `;
        }