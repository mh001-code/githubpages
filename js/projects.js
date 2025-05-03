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

const images = document.querySelectorAll('.carousel-slide img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('lightboxClose');
const prevBtn = document.getElementById('lightboxPrev');
const nextBtn = document.getElementById('lightboxNext');

let currentIndex = 0;
let allImages = [];

images.forEach((img, index) => {
    img.dataset.index = index;
    img.addEventListener('click', () => {
        allImages = Array.from(document.querySelectorAll('.carousel-slide img')); // Garante atualização
        currentIndex = parseInt(img.dataset.index);
        openLightbox();
    });
});

function openLightbox() {
    lightboxImg.src = allImages[currentIndex].src;
    lightbox.classList.add('show');
}

function closeLightbox() {
    lightbox.classList.remove('show');
}

function showPrev() {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    lightboxImg.src = allImages[currentIndex].src;
}

function showNext() {
    currentIndex = (currentIndex + 1) % allImages.length;
    lightboxImg.src = allImages[currentIndex].src;
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrev();
});
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNext();
});


