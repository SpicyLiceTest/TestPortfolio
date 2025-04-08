// Header fade on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('fade', window.scrollY > 100);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded!");
});
