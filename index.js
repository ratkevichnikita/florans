// ---- СЛАЙДЕРЫ  -------//

//Задаю число слайдов в зависимости от ширины экрана 
let slidesCount;
if (window.innerWidth > 1149) {
    slidesCount = 3;
} else if (window.innerWidth > 774 && window.innerWidth <= 1149) {
    slidesCount = 2;
} else {
    slidesCount = 1;
}

// Слайдер в секции акций
new Swiper('.promotions-slider', {
    navigation: {
        nextEl: '.promotions__arrow._left',
        prevEl: '.promotions__arrow._right',
    },
    slidesPerView: slidesCount,
    slidesPerGroup: slidesCount,
    spaceBetween: 20,
    pagination: {
        el: '.promotions__pagination',
        clickable: true,
    }
});

// Слайдер в секции оборудования
new Swiper('.equipment-slider', {
    navigation: {
        nextEl: '.equipment__arrow._left',
        prevEl: '.equipment__arrow._right',
    },
    slidesPerView: slidesCount,
    slidesPerGroup: slidesCount,
    spaceBetween: 20,
    pagination: {
        el: '.equipment__pagination',
        clickable: true,
    }
});


// ----- АККОРДЕОН ----- //
const accordeons = document.querySelectorAll('.faq__question');
accordeons.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('_active')
    })
})

// ----- БУРГЕР-МЕНЮ ----- //

// Объявление элементов
const burgerBtn = document.querySelector('.burger-button');
const mainBurgerMenu = document.querySelector('.burger-menu._main');
const subBurgerMenu = document.querySelector('.burger-menu._sub');
const dropBurgerMenu = document.querySelector('.burger-menu._drop');
const substrate = document.querySelector('.substrate');
const crosses = document.querySelectorAll('.burger-menu__cross');
const burgerMenuLinks = document.querySelectorAll('.burger-menu li._clickable');
const burgerMenuArrows = document.querySelectorAll('.burger-menu .burger-menu__arrowback');

// Открытие бургенр-меню при клике на бургер-кнопку
burgerBtn.addEventListener('click', () => {
    mainBurgerMenu.style.right = '0';
    substrate.style.display = 'block';
})

// Функция закрытия бургер-менб
function closeBurgerMenu() {
    [mainBurgerMenu, subBurgerMenu, dropBurgerMenu].forEach(elem => {
        elem.style.right = '-100%';
    })

    substrate.style.display = 'none';
}
[substrate, ...crosses].forEach(elem => {elem.addEventListener('click', closeBurgerMenu)})


// Переход по ссылками из бургер-меню
burgerMenuLinks.forEach(elem => {
    elem.addEventListener('click', (event) => {
        if (event.target.closest('.burger-menu._main')) {
            mainBurgerMenu.style.right = '-100%';
            setTimeout(() => {
                subBurgerMenu.style.right = '0';
            }, 500)
        } else if (event.target.closest('.burger-menu._sub')) {
            subBurgerMenu.style.right = '-100%';
            setTimeout(() => {
                dropBurgerMenu.style.right = '0';
            }, 500)
        }
    })
})

// Возврашение назад по уровню при клике на стрелки в бургер-меню
burgerMenuArrows.forEach(elem => {
    elem.addEventListener('click', (event) => {
        if (event.target.closest('.burger-menu._sub')) {
            subBurgerMenu.style.right = '-100%',
            setTimeout(() => {
                mainBurgerMenu.style.right = '0';
            }, 500)
        } else if (event.target.closest('.burger-menu._drop')) {
            dropBurgerMenu.style.right = '-100%',
            setTimeout(() => {
                subBurgerMenu.style.right = '0';
            }, 500)
        }
    })
})