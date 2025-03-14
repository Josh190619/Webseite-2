let carouselIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carouselTrack = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[carouselIndex].classList.add('active');
}

function moveCarousel(direction) {
    carouselIndex += direction;
    
    if (carouselIndex < 0) {
        carouselIndex = totalSlides - 1;
    } else if (carouselIndex >= totalSlides) {
        carouselIndex = 0;
    }

    updateCarousel();
}

// Automatisches Scrollen alle 5 Sekunden
setInterval(() => moveCarousel(1), 5000);

function setCarouselSlide(index) {
    carouselIndex = index;
    updateCarousel();
}

// Initialisieren der aktiven Punktanzeige
updateCarousel();