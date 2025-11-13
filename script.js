document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('#nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('open');
            hamburger.style.transform = expanded ? 'rotate(0)' : 'rotate(90deg)';
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('open');
            }
        });
    });

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
