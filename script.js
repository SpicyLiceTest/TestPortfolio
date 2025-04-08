// Fade hero (header, image, and caption) on scroll
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const heroHeight = hero.offsetHeight;
    const scrollPosition = window.scrollY;

    // Fade out when scrolling past the hero section
    hero.classList.toggle('fade', scrollPosition > heroHeight);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded!");
});
