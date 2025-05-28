let indice = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(n) {
    slides.forEach(slide => slide.classList.remove('activo'));
    indice = (n + slides.length) % slides.length;
    slides[indice].classList.add('activo');
}

function moverCarrusel(n) {
    mostrarSlide(indice + n);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarSlide(indice);
});