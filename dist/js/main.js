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
    slidesPerView: 5,
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

// Похожие товары
const similarProductSwiper = new Swiper('.similarProductSwiper', {
    slidesPerView: 2,
    loop: false,
    spaceBetween: 9,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 9,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 9,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ PHONE MASK ]

var maskPhone = document.querySelectorAll('.maskPhone')
var maskDate = document.querySelectorAll('.maskDate')

maskPhone.forEach(function (el) {
    IMask(el, {
        mask: '+{7}(000)000-00-00'
    });
});

maskDate.forEach(function (el) {
    IMask(el, {
        mask: Date,
        min: new Date(1900, 0, 1),
        lazy: false
    });
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        type: "classic",
    },
    Toolbar: {
        display: {
            left: [],
            middle: ["close"],
            right: [],
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ Включаем Bootstrap подсказки ]

[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) { return new bootstrap.Tooltip(e, { trigger: "hover" }) })

//////////////////////////////////////////////////////////////////
// [ Скрываем кнопку "Купить" и показываем выбор количества ]

// var buyButtons = document.querySelectorAll('.buy-button');

// buyButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//         document.querySelector('.number-quantity').classList.add('show');
//         this.style.display = 'none';
//     });
// });



// V2
var addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

addToCartButtons.forEach(function (addToCartButton) {
    var quantityContainer = addToCartButton.nextElementSibling;
    var quantityInput = quantityContainer.querySelector('.quantity-input');
    var minusButton = quantityContainer.querySelector('.minus-button');
    var plusButton = quantityContainer.querySelector('.plus-button');

    addToCartButton.addEventListener('click', function () {
        quantityContainer.style.display = 'block';
        addToCartButton.style.display = 'none';
    });

    minusButton.addEventListener('click', function () {
        var currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        } else {
            quantityContainer.style.display = 'none';
            addToCartButton.style.display = 'block';
        }
    });

    plusButton.addEventListener('click', function () {
        var currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    quantityInput.addEventListener('change', function () {
        var quantity = parseInt(quantityInput.value);

        if (quantity < 1) {
            quantityContainer.style.display = 'none';
            addToCartButton.style.display = 'block';
        }
    });
});
