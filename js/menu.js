const burgetMenuButton = document.getElementById('burgerMenu');
const menu = document.getElementById('mainMenu');
const menuButtons = document.querySelectorAll('#mainMenu a, #logo');

burgetMenuButton.addEventListener('click', () => {
    burgetMenuButton.classList.toggle('burgerMenu--active');
    menu.classList.toggle('mainNav__menu--active');
})

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        burgetMenuButton.classList.remove('burgerMenu--active');
        menu.classList.remove('mainNav__menu--active');
    })
})