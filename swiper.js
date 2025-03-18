new Swiper('.swiper', {
    direction: 'horizontal',
    autoplay: {
        delay: 50000,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10, // 공백 10px 유지
    loopAdditionalSlides : 1,
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
    loopAdditionalSlides : 1,
    navigation: {
        nextEl: '.f_swiper-button-next',
        prevEl: '.f_swiper-button-prev',
    },
});