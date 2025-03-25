
var notices = new Swiper('.n_swiper', {
    direction: 'vertical',
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    centeredSlides: true,
    loop:true,
});


var open_promotion = document.getElementsByClassName('open_promotion')[0];
var promotion = document.getElementsByClassName('promotion')[0];

var isOpen = true;
var hei = 693;
function open_close() { 
    promotion.classList.toggle('expanded');
}
open_promotion.addEventListener('click', open_close);

var p_swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    autoplay: {
        delay: 5000,
    },
    loop: true,
    slidesPerView: 3, // 항상 3개 보이게 설정
    spaceBetween: 10,
    centeredSlides: true, // 중앙 정렬
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var footerSwiper = new Swiper('.f_swiper', {
    direction: 'horizontal',
    autoplay: {
        delay:5000,
    },
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '.f_swiper-button-next',
        prevEl: '.f_swiper-button-prev',
    },
});