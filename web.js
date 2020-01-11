
function detail_link(detail_link) {
    window.location.href = "detail.html?index="+detail_link.id; 
}


window.onload = function() {
    var detailImage = document.querySelector(".detailImage");
 
    var val = location.href.substr(
        location.href.lastIndexOf('=') + 1
    );
    if(val == "detail_link_1"){
        detailImage.src = "images/detail.jpg"
    }
    else if(val == "detail_link_2"){
        detailImage.src = ""
    }
    else if(val == "detail_link_3"){
        detailImage.src = ""
    }
    else if(val == "detail_link_4"){
        detailImage.src = ""
    }
    else if(val == "detail_link_5"){
        detailImage.src = ""
    }
    else if(val == "detail_link_6"){
        detailImage.src = ""
    }
    else if(val == "detail_link_7"){
        detailImage.src = ""
    }
    else if(val == "detail_link_8"){
        detailImage.src = ""
    }
    else if(val == "detail_link_9"){
        detailImage.src = ""
    }
        
}