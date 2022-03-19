let buttonBurger = document.querySelector('.header-column__item--burger');
export let buttonsTopBurger = document.querySelectorAll('.button-aside');
let buttonCloseBurger = document.querySelector('.aside-column__item--burger');
let wrapperAside = document.querySelector('.wrapper-aside');
export let commonWrapper = document.querySelector('.common-wrapper');
let navListItems = document.querySelectorAll('.nav-list__item');
let burgerLang = document.querySelectorAll('.footer-column__item--lang');
let footerItemBurger = document.querySelectorAll('.footer-column__item');

buttonBurger.addEventListener('click', function() {
  wrapperAside.classList.add('menu-burger');
  commonWrapper.classList.add('non-click');
  wrapperAside.classList.remove('close');
});

/* ===================================================== */
// попытка закрытия бургер меню по заблюренной области

  if (commonWrapper.classList.contains('non-click')) {
    commonWrapper.addEventListener('click', function(evt) {
      wrapperAside.classList.remove('menu-burger');
      commonWrapper.classList.remove('non-click');
      wrapperAside.classList.add('close')
    })
  }
/* =================================================== */
// buttonCloseBurger.addEventListener('click', function(evt) {

//   wrapperAside.classList.remove('menu-burger');
//   commonWrapper.classList.remove('non-click');
//   wrapperAside.classList.add('close')
// })


// закрытие через элементы меню
  for (let i = 0; i < navListItems.length; i++) {
    navListItems[i].addEventListener ('click', function() {
      wrapperAside.classList.remove('menu-burger');
      commonWrapper.classList.remove('non-click');
      wrapperAside.classList.add('close')
    })
  }

// закрытие через языковые панели
  for (let j = 0; j < burgerLang.length; j++) {
    burgerLang[j].addEventListener ('click', function() {
      wrapperAside.classList.remove('menu-burger');
      commonWrapper.classList.remove('non-click');
      wrapperAside.classList.add('close')
    })
  }

// закрытие через кнопки снизу бургера
  // for (let j = 0; j < footerItemBurger.length; j++) {
  //   footerItemBurger[j].addEventListener ('click', function() {
  //     wrapperAside.classList.remove('menu-burger');
  //     commonWrapper.classList.remove('non-click');
  //     wrapperAside.classList.add('close')
  //   })
  // }

// закрытие через кнопки сверху бургера
  for (let j = 0; j < buttonsTopBurger.length; j++) {
    buttonsTopBurger[j].addEventListener ('click', function() {
      wrapperAside.classList.remove('menu-burger');
      commonWrapper.classList.remove('non-click');
      wrapperAside.classList.add('close')
    })
  }
