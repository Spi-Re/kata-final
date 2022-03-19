let navListItem = document.querySelectorAll('.footer-column__item--lang');

for (let j = 0; j < navListItem.length; j++) {
  navListItem[j].addEventListener('click', function (evt) {

    if(!navListItem[j].classList.contains('active-footer')) {

      for(let i = 0; i < navListItem.length; i++) {
        navListItem[i].classList.remove('active-footer');
      }

      navListItem[j].classList.add('active-footer');
    }
  });
}
