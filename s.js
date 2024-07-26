let cur =1;

showSlide(cur);

function changeSlide(n){
    cur+=n;
    showSlide(cur);
}
function showSlide(n){
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { n = 1; }
    if (n < 1) { cur = slides.length; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#999";
    }
    dots[n-1].style.backgroundColor = "black";
    slides[n-1].style.display = "block";
    cur = n;
}