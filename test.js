const nav = document.querySelector(".js-nav");
const body = document.getElementById("body");
const html = document.getElementById("html");


function init() {
    nav.click(function(event) {
        event.preventDefault();
        console.log("test");
    });
}

init();