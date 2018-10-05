function imgbox(n) {
    switch (n) {
        case 1:
            box.classList.remove("img-popup__box--2");
            box.classList.remove("img-popup__box--3");
            box.classList.add("img-popup__box--1");
            img = 1;
            break;
        case 2:            
            box.classList.remove("img-popup__box--1");
            box.classList.remove("img-popup__box--3");
            box.classList.add("img-popup__box--2");
            img = 2;
            break;
        case 3:
            box.classList.remove("img-popup__box--1");
            box.classList.remove("img-popup__box--2");
            box.classList.add("img-popup__box--3");
            img = 3;
            break;
        default:
            imgbox(randomIntBetween(1, 3));
    }
}

function next() {
    img = img % 3 + 1;
    imgbox (img);
}

function prev() {    
    img = (img-1) % 3;
    if (img < 1) {
        img = 3;
    }
    imgbox(img);
}

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var box = document.getElementById("popup-box");
var img = imgbox(randomIntBetween(1, 3));