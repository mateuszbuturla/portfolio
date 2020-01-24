//********************My skills********************
const swiperSkills = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 2,
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

//********************Gsap********************
TweenMax.from(".header__text h1", 1, {
    delay: 0,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".header__text p", 1, {
    delay: 0.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

document.addEventListener('scroll', () => {
    if (window.scrollY >= document.querySelector('.about-me').offsetTop + 200) {
        TweenMax.to(".about-me .section__name", 1, {
            delay: 0,
            opacity: 1,
            y: -20,
            ease: Expo.easeInOut
        });
        TweenMax.to(".about-me .avatar", 1, {
            delay: 0.5,
            opacity: 1,
            y: -20,
            ease: Expo.easeInOut
        });
        TweenMax.to(".about-me__desctiprion", 1, {
            delay: 1,
            opacity: 1,
            y: -20,
            ease: Expo.easeInOut
        });
    }
    if (window.scrollY >= document.querySelector('.my-skills').offsetTop + 200) {
        TweenMax.to(".my-skills .section__name", 1, {
            delay: 0,
            opacity: 1,
            y: -20,
            ease: Expo.easeInOut
        });
        TweenMax.to(".my-skills .swiper-container", 1, {
            delay: 0.5,
            opacity: 1,
            y: -20,
            ease: Expo.easeInOut
        });
    }
    if (window.scrollY >= document.querySelector('.my-projects').offsetTop + 200) {
        TweenMax.to(".my-projects .section__name", 1, {
            delay: 0,
            opacity: 1,
            y: -20,
            ease: Expo.easeInOut
        });
        TweenMax.to(".my-projects .section__flex-pr", 1, {
            delay: 0.5,
            opacity: 1,
            y: -20,
            ease: Expo.easeInOut
        });
    }
});