var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 37,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

// Abrir e fechar o menu em dispositivos movéis
const menu = document.querySelector('#menu-btn')
const navItemsBar = document.querySelector('.nav-items')
const menuBg = document.querySelector('.menu-bg-header')

menu.addEventListener('click', () => {
    menuBg.classList.toggle('menu-bg-active')
    navItemsBar.classList.toggle('nav-open')
})