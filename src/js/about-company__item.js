let navListItem = document.querySelectorAll('.about-company__item');
let active = 'about-company__item--active';

for (let j = 0; j < navListItem.length; j++) {
  navListItem[j].addEventListener('click', function (evt) {

    if(!navListItem[j].classList.contains(active)) {

      for(let i = 0; i < navListItem.length; i++) {
        navListItem[i].classList.remove(active);
      }

      navListItem[j].classList.add(active);
    }
  });
}
