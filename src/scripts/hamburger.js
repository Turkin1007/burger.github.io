const burgerEl = document.getElementById('bur');
const buttonClose = document.getElementById('close');
const menuEl = document.getElementById('hamburger-menu');
const menuLinks = menuEl.querySelectorAll('.menu__link');

function showMenu() {
  menuEl.style.display = "flex";
}

function closeMenu() {
  menuEl.style.display = "none";
}

for (let i = 0; menuLinks.length > i; i++) {
  menuLinks[i].addEventListener('click', closeMenu);
}

burgerEl.addEventListener('click', showMenu);
buttonClose.addEventListener('click', closeMenu);