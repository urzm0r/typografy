function img_close_up(src) {
    let cont = document.getElementById("close-up-cont");
    let close_up = document.createElement("img");
    close_up.src = src;
    close_up.className = "close-up";
    cont.appendChild(close_up);
    cont.className = "close-up-cont-show";
}

function img_close_up_hide() {
    let cont = document.getElementById("close-up-cont");
    cont.lastChild.remove()
    cont.className = "";
}

document.body.addEventListener('click', function( event ){
    if ( event.target.tagName == 'IMG' && event.target.className != 'close-up' ){
        img_close_up(event.target.src);
    } else if ( event.target.className == 'close-up-cont-show') {
        img_close_up_hide();
    }
})