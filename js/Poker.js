"use strict"
/*-------------------*/
const hamburgerMenu = document.getElementById('hamburger-menu');
const menuContent = document.getElementById('menu-content');
const body = document.body;

/*-------------------*/
hamburgerMenu.addEventListener('click', () => {
    const isActive = menuContent.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');

    if (isActive) {
        body.classList.add('menu-open');
    } else {
        body.classList.remove('menu-open');
    }
});

/*-------------------*/
menuContent.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuContent.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

/*-------------------*/
document.getElementById("toTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});