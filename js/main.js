//////////////////////////////////////////////////////////////////
// [ Главный слайдер ]

const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: {
        delay: 3500,
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
});

// На shop-item.html
const thumbsSwiper = new Swiper('.thumbsSwiper', {
    spaceBetween: 8,
    slidesPerView: 6,
});
const productItemSwiper = new Swiper('.productItemSwiper', {
    slidesPerView: 1.2,
    spaceBetween: 12,
    grabCursor: true,
    thumbs: {
        swiper: thumbsSwiper,
    },
    breakpoints: {
        992: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ PHONE MASK ]

document.addEventListener('DOMContentLoaded', function () {

    var mask1 = document.getElementById('maskPhone1')
    if (mask1) {
        const maskPhone1 = IMask(
            mask1, {
            mask: '+{7} (000) 000-00-00'
        });
    }

});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

//////////////////////////////////////////////////////////////////
// [ Включаем Bootstrap подсказки ]

[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) { return new bootstrap.Tooltip(e, { trigger: "hover" }) })