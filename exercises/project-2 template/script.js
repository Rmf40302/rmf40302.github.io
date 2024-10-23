document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementsById('burger');
    const navbar = document.getElementById('navbar');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('active'); 
    });
});