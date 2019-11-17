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


/*
const mainImages = document.querySelectorAll(".main_images");

window.addEventListener('resize', () => {
    const slideSize = document.querySelector(".slider");
    slideSize.setAttribute("height", window.innerHeight);
    mainImages.forEach(img => {
        img.setAttribute("height", window.innerHeight);
        img.setAttribute("width", window.innerWidth);
    })
});

*/