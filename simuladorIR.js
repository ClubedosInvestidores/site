document.getElementById('capitalGainsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores inseridos
    const purchasePrice = parseFloat(document.getElementById('purchasePrice').value);
    const salePrice = parseFloat(document.getElementById('salePrice').value);
    const holdingPeriod = parseInt(document.getElementById('holdingPeriod').value);

    // Validação de campos
    if (isNaN(purchasePrice) || isNaN(salePrice) || isNaN(holdingPeriod)) {
        alert('Por favor, preencha todos os campos corretamente!');
        return;
    }

    // Calcula o Ganho de Capital
    const capitalGains = salePrice - purchasePrice;

    // Verifica se houve ganho de capital
    if (capitalGains <= 0) {
        alert('Não houve ganho de capital, portanto não há imposto a pagar!');
        document.getElementById('capitalGains').innerText = "0,00";
        document.getElementById('taxAmount').innerText = "0,00";
        return;
    }

    // Determina a alíquota do imposto dependendo do tempo de posse
    let taxRate = 0;
    if (holdingPeriod >= 5) {
        // Se a posse foi maior ou igual a 5 anos, a alíquota é de 15%
        taxRate = 0.15;
    } else {
        // Se a posse foi menor que 5 anos, a alíquota é de 20%
        taxRate = 0.20;
    }

    // Calcula o imposto a ser pago
    const taxAmount = capitalGains * taxRate;

    // Exibe os resultados
    document.getElementById('capitalGains').innerText = capitalGains.toFixed(2);
    document.getElementById('taxAmount').innerText = taxAmount.toFixed(2);
});
