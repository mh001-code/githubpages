document.querySelectorAll('.carousel').forEach(carousel => {
    const slide = carousel.querySelector('.carousel-slide');
    const images = slide.querySelectorAll('img');
    const prevButton = carousel.querySelector('.prev-btn');
    const nextButton = carousel.querySelector('.next-btn');

    let currentIndex = 0;

    // Função para mostrar a imagem correta
    const updateCarousel = () => {
        const slideWidth = images[0].clientWidth; // Largura da imagem
        slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Configuração inicial
    updateCarousel();

    // Botão Anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    // Botão Próximo
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    // Ajusta o carrossel ao redimensionar a janela
    window.addEventListener('resize', updateCarousel);
});
