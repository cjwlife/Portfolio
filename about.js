function scrollAppear() {
    var aboutText = document.querySelector(".about_text");
    var aboutPosition = aboutText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (aboutPosition < screenPosition) {
        aboutText.classList.add("about_appear");
    }
}

window.addEventListener("scroll", scrollAppear);