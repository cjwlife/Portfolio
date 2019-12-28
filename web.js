var detailImage = document.querySelector(".detailImage");

function detail_link(detail_link) {
    console.log(detailImage);
    if (detail_link.id == "detail_link_1") {
        detailImage.src = "images/detail.jpg";

    }
    location.href = "detail.html";
}