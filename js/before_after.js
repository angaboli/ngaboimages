
const delta = 10;
const LINE_COLOR = 'rgba(239, 87, 52)';
const LINE_WIDTH = 10;

var setup = function() {
    let theCanvas = document.getElementById("theCanvas1");
    let slider = new ImageSlider(theCanvas);
    slider.initImages("images/gallery/b1.jpg","images/gallery/a1.jpg");

    let theCanvas2 = document.getElementById("theCanvas2");
    let slider2 = new ImageSlider(theCanvas2);
    slider2.initImages("images/gallery/b2.jpg","images/gallery/a2.jpg");
}

window.addEventListener("DOMContentLoaded",setup);
