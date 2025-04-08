// Fade top section (header + hero) on scroll
window.addEventListener('scroll', () => {
    const topSection = document.getElementById('top-section');
    const scrollPosition = window.scrollY;
    const imageHeight = document.querySelector('.profile-img').offsetHeight;

    // Fade out when scroll position exceeds the image height
    topSection.classList.toggle('fade', scrollPosition > imageHeight + 50); // +50 for buffer
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded!");
});
