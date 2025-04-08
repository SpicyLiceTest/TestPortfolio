// Fade header and hero on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;

    header.classList.toggle('fade', scrollPosition > 100);
    hero.classList.toggle('fade', scrollPosition > 200);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded!");
});
