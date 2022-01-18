const hamburger = document.querySelector('.hamburger');
const listNavigation = document.querySelector('.header__list');
const listNavigationTwo = document.querySelector('.content__adaptive-menu');

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('is-active');
  listNavigation.classList.toggle('open');
  listNavigationTwo.classList.toggle('open');
});

listNavigation.addEventListener('click', closeMenu);

function closeMenu(event) {
  if(event.target.classList.contains('header__list-item') || event.target.classList.contains('header__list-link')) {
    hamburger.classList.remove('is-active');
    listNavigation.classList.remove('open');
  };
}
