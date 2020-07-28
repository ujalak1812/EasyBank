const btnHamburger = document.getElementById('btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const menu = document.getElementById('menu');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function() {
    
    if(header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        menu.classList.remove('fade-in');
        menu.classList.add('fade-out');
    }
    else 
    {
        body.classList.add('noscroll');
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        menu.classList.add('fade-in');
        menu.classList.remove('fade-out');
    }

});
