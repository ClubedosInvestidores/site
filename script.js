// Seleciona todos os elementos com a classe "quadrado"
const quadrados = document.querySelectorAll('.card_ind');

// Configuração do Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe "aparecer" quando o elemento entra na tela
            entry.target.classList.add('aparecer');
            observer.unobserve(entry.target); // Para de observar depois de animar uma vez
        }
    });
}, {
    threshold: 0.5 // Define que o elemento precisa estar 50% visível para acionar
});

// Observa cada quadrado
quadrados.forEach(quadrado => {
    observer.observe(quadrado);
});