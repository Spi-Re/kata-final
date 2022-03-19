let itemCall = document.querySelectorAll('.call');
let wrapperAsideCall = document.querySelector('.wrapper-aside--right');
import {commonWrapper} from './menu-burger';
import {buttonsTopBurger} from './menu-burger';
let wrapperAside = document.querySelector('.wrapper-aside');
let hugeWrapper = document.querySelector('.huge-wrapper');


let widthForCall = window.innerWidth;

for (let i = 0; i < itemCall.length; i++) {

  if (widthForCall > 1119) {
    itemCall[0].addEventListener ('click', function() {
      wrapperAside.style.display = 'none';
      wrapperAsideCall.classList.add('order-call');
      commonWrapper.classList.add('non-click');
      hugeWrapper.style.opacity = '0.05';
      hugeWrapper.style.pointerEvents = 'none';
      wrapperAsideCall.classList.remove('close');
    })

  }


  itemCall[i].addEventListener ('click', function() {
    wrapperAsideCall.classList.add('order-call');
    commonWrapper.classList.add('non-click');
    hugeWrapper.style.opacity = '0.05';
    hugeWrapper.style.pointerEvents = 'none';
    wrapperAsideCall.classList.remove('close');
  })
}

for (let j = 0; j < buttonsTopBurger.length; j++) {
  buttonsTopBurger[j].addEventListener ('click', function() {
    wrapperAside.style.display = 'flex';
    wrapperAsideCall.classList.remove('order-call');
    wrapperAsideCall.classList.add('close');
    hugeWrapper.style.opacity = '1';
    hugeWrapper.style.pointerEvents = 'auto';
    commonWrapper.classList.remove('non-click');
  })
}

  // wrapperAside.classList.remove('order-call');
  //   commonWrapper.classList.remove('non-click');
  //   wrapperAside.classList.add('close')
