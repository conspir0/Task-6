// Menu burger
//-----------------------------------------------------
const button = document.querySelector('.menu-burger-btn'),
      menu = document.querySelector('.menu-burger');

console.log('dziala');

button.addEventListener('click', () => {
    button.classList.toggle('close');
    menu.classList.toggle('show');
});

// Popup
//-----------------------------------------------------
const showModal = function(event){
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.add('show');
};
	
const modalLinks = document.querySelector('.show-modal');
	
    modalLinks.addEventListener('click', showModal);

const hideModal = function(event){
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
}; 
	
document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
const modals = document.querySelector('.modal');
	
modals.addEventListener('click', function(event){
    event.stopPropagation();
});