const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// Move to the previous slide
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideImages.length - 1;
    updateSlider();
});

// Move to the next slide
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slideImages.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

// Update slider position
function updateSlider() {
    const width = slideImages[0].clientWidth;
    slides.style.transform = `translateX(${-currentIndex * width}px)`;
}
