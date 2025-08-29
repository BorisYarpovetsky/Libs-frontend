/* Мобильное меню */
const menuMobile = document.querySelector('#menu__mobile');
const MobileMenu = document.querySelector('#menu');
const bodyEl = document.body;

if (menuMobile) {
    menuMobile.addEventListener('click', ()=> {
        if (menuMobile.classList.contains('active')) {
            menuMobile.classList.remove('active');
            MobileMenu.classList.remove('active');
            bodyEl.classList.remove('lock');
        } else {
            menuMobile.classList.add('active');
            MobileMenu.classList.add('active');
            bodyEl.classList.add('lock');
        }
    });

    /* Клик по мобильному меню */
    MobileMenu.addEventListener('click', ()=> {
        menuMobile.classList.remove('active');
        MobileMenu.classList.remove('active');
        bodyEl.classList.remove('lock');
    });
}