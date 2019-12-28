const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider__item:first-child");

function slide() {
    console.log(firstSlide)
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}
slide();
setInterval(slide, 3000);



const sliderImageSize = document.querySelector(".slider__item");
const slider = document.querySelector(".slider");

window.onload = function() {
    slider.style.height = sliderImageSize.offsetHeight + 200 + 'px';
    console.log(sliderImageSize.offsetHeight + 'px');
}
window.addEventListener('resize', () => {
    slider.style.height = sliderImageSize.offsetHeight + 200 + 'px';
    console.log(sliderImageSize.offsetHeight + 'px');
});