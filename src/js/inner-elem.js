const items = [...document.querySelectorAll('.item-company--price')];
let windowTablet = window.innerWidth;
let elem = document.querySelector('.body-company--price');
let elemEnd = document.querySelector('.huge-wrapper--price')


if (windowTablet > 498) {
  const div1 = document.createElement('div');
  div1.classList.add('huge-wrapper--price');
  elem.append(div1);
  div1.append(...items.slice(0, 5));

  const div2 = document.createElement('div');
  div2.classList.add('test');
  elemEnd.append(div2);
  div2.append(...items.slice(5, 10));
}

