//********************My skills********************
const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});