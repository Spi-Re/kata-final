let navList = document.querySelector('.nav-list');
let navListItem = document.querySelectorAll('.nav-list__item');

for (let j = 0; j < navListItem.length; j++) {
  navListItem[j].addEventListener('click', (event) => {

    if(!navListItem[j].classList.contains('active')) {

      for(let i = 0; i < navListItem.length; i++) {
        navListItem[i].classList.remove('active');
      }

      navListItem[j].classList.add('active');
    }
  });
}
