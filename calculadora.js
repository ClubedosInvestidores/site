function calcularJuros() {
    // Pegando os valores dos campos
    const principal = parseFloat(document.getElementById('principal').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tempo = parseFloat(document.getElementById('tempo').value);

    // Verificando se os valores são válidos
    if (isNaN(principal) || isNaN(taxa) || isNaN(tempo) || principal <= 0 || taxa <= 0 || tempo <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calculando o juros simples
    const juros = (principal * taxa * tempo) / 100;
    const montante = principal + juros;

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = `
        <p>Valor dos Juros: R$ ${juros.toFixed(2)}</p>
        <p>Montante Final: R$ ${montante.toFixed(2)}</p>
    `;
}
