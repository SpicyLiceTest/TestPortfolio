// Fade header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    // Fade out header when scrolling past 300px (image height)
    header.classList.toggle('fade', scrollPosition > 300);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded!");
});
