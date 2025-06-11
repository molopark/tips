document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        body.classList.toggle('menu-open');
    });
});
