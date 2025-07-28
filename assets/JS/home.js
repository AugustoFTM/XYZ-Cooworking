// Seleciona os elementos principais do carrossel
const caroussel = document.querySelector('.caroussel');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0; // slide atual

// Função para mostrar o slide na posição correta
function showSlide(i) {
    if (i < 0) index = slides.length - 1; // se voltar antes do primeiro, vai para o último
    else if (i >= slides.length) index = 0; // se passar do último, volta pro primeiro
    else index = i;

    // Move a faixa de slides para o slide atual
    caroussel.style.transform = `translateX(-${index * 100}%)`;
}

// Evento de clique para botão "voltar"
prev.addEventListener('click', () => showSlide(index - 1));

// Evento de clique para botão "próximo"
next.addEventListener('click', () => showSlide(index + 1));

// Slide automático a cada 6 segundos (opcional)
setInterval(() => showSlide(index + 1), 6000);