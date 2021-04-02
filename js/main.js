// ----------------------------------------------
// ГЛОБАЛЬНЫЙ ПЕРЕМЕННЫЕ
// ----------------------------------------------

const body = document.querySelector('body');

// ----------------------------------------------
// ФУНКЦИИ ДЛЯ ВСЕГО САЙТА
// ----------------------------------------------

// АККОРДЕОНЫ <--
function accordion(accHeaderElem) {
  accHeaderElem.forEach((accHeader) => {
    accHeader.addEventListener('click', () => {
      for (let i = 0; i < accHeaderElem.length; i++) {
        accHeaderElem[i].classList.remove('_open');
        if (!accHeaderElem[i].classList.contains('_open')) {
          accHeaderElem[i].nextElementSibling.style.maxHeight = 0;
        }
      }
      accHeader.classList.toggle('_open');
      accHeader.nextElementSibling.style.maxHeight = accHeader.nextElementSibling.scrollHeight + 'px';
    });
    accHeader.nextElementSibling.style.maxHeight = '0';
    for (let i = 0; i < accHeaderElem.length; i++) {
      if (accHeaderElem[i].classList.contains('_open')) {
        accHeaderElem[i].nextElementSibling.style.maxHeight = accHeader.nextElementSibling.scrollHeight + 'px';
      }
    }
  });
}
// -->

// ПЕРЕМОТКА НАВЕРХ ПРИ КЛИКЕ ПО СТРЕЛКЕ "НАВЕРХ" <--
const windowHeight = document.querySelector('html').clientHeight,
arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', function() {
  if (pageYOffset >= windowHeight ) {
    arrowUp.classList.add('_show');
  }
  if (pageYOffset <= windowHeight ) {
    arrowUp.classList.remove('_show');
  }
});

arrowUp.addEventListener('click', () => {
  window.scrollBy(0,-pageYOffset);
});
// -->

// ----------------------------------------------
// ФУНКЦИИ ДЛЯ ОПРЕДЕЛЕННЫХ РАЗДЕЛОВ
// ----------------------------------------------

// ОТКРЫТИЕ И ЗАКРЫТИЕ БУРГЕР МЕНЮ <--
const menu = document.querySelector('.menu'),
      burger = document.querySelector('.navbar-burger'),
      menuClose = document.querySelector('.menu-close');

burger.addEventListener('click', () => {
  menu.classList.add('_show');
  body.classList.add('_lock');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('_show');
  body.classList.remove('_lock');
});
// -->


// СЛАЙДЕР НА ГЛАВНОМ ЭКРАНЕ <--
const swiper = new Swiper('.header__slider-content', {
  
  direction: 'horizontal',

  navigation: {
    nextEl: '.header__slider-arrow-next',
    prevEl: '.header__slider-arrow-prev',
  },

  scrollbar: {
    el: '.header__slider-scrollbar',
  }
});
// -->

// АККОРДЕОН В РАЗДЕЛЕ CATALOG <--
const catalogAccHeaderElems = document.querySelectorAll('.catalog-sidebar__acc-header');

accordion(catalogAccHeaderElems);
// -->

// ОТКРЫТИЕ НУЖНЫХ КАРТОЧКАХ ПРИ КЛИКЕ ПО АККОРДЕОНАМ В РАЗДЕЛЕ CATALOG <--
const accCatalogHeaderElems = document.querySelectorAll('.catalog-sidebar__acc-header'),
      catalogElems = document.querySelectorAll('.catalog-cards__body');

accCatalogHeaderElems.forEach((accHeader) => {
  accHeader.addEventListener('click', () => {
    const accHeaderData = accHeader.dataset.lamp,
          lampDataCatalog = document.querySelector('.catalog-cards__body[data-lamp="'+accHeaderData+'"]');
    
    for (let i = 0; i < catalogElems.length; i++) {
      catalogElems[i].classList.remove('_show');
    }

    lampDataCatalog.classList.add('_show');
  });
  
});
// -->

// АККОРДЕОН В РАЗДЕЛЕ SERVICES <--
const servicesAccHeaderElems = document.querySelectorAll('.services__acc__header');

accordion(servicesAccHeaderElems);
// -->

// СТИЛИ CSS <--
const servicesIcon = document.querySelectorAll('.services-icon');

for (let i = 0; i < servicesIcon.length; i++) {
  const servicesAccHeaderForIcons = servicesIcon[i].nextElementSibling.childNodes[1].scrollHeight;
  servicesIcon[i].style.height = servicesAccHeaderForIcons + 'px';
}
// -->

// FOOTER COPYRIGHT YEAR<--
  document.querySelector('.footer-copyright span').innerHTML = new Date().getFullYear();
// -->