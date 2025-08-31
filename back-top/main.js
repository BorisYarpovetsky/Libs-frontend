/* Back top button */
const backTop = document.querySelector('.back__top');
if (backTop) {
    window.addEventListener('scroll', () => {
        if(window.scrollY > 500) {
            backTop.classList.add('back__top--visible');
        }
        else {
            backTop.classList.remove('back__top--visible');
        }
    });
};