// Menu burger
//-----------------------------------------------------
const button = document.querySelector('.menu-burger-btn'),
      menu = document.querySelector('.menu-burger');

console.log('dziala');

button.addEventListener('click', () => {
    button.classList.toggle('close');
    menu.classList.toggle('show');
});