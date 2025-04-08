// Fade out header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('fade-out');
    } else {
        header.classList.remove('fade-out');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded successfully!");
});
