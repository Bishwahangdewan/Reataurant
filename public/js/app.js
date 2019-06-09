
//text slider
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}



//sticky navbar
const nav = document.querySelector('.nav-container');
const menu = document.querySelector('nav');
console.log(nav)
window.onscroll = function(){
     if(window.pageYOffset > 80){
            nav.className = "nav-container sticky";
            menu.style.display ="block";
     }else{
            nav.classList.remove('sticky');
            menu.style.display ="none";
     }
}