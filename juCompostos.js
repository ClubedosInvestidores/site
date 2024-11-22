function calcularJurosCompostos() {
    // Obter os valores inseridos pelo usuário
    const principal = parseFloat(document.getElementById('principal').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);

    // Validar os dados de entrada
    if (isNaN(principal) || isNaN(taxa) || isNaN(tempo) || principal <= 0 || taxa <= 0 || tempo <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Fórmula de Juros Compostos: A = P * (1 + r)^t
    const montante = principal * Math.pow(1 + taxa, tempo);
    const juros = montante - principal;

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `
        <p><strong>Juros: </strong>R$ ${juros.toFixed(2)}</p>
        <p><strong>Montante Final: </strong>R$ ${montante.toFixed(2)}</p>
    `;
}
