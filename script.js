let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Show first slide
slides[currentSlide].classList.add('active');

// Arrows
document.querySelector('.arrow.right').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
});

document.querySelector('.arrow.left').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
});

// Auto-slide every 10 seconds
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
}, 10000);
