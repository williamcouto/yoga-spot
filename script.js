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
let menu = document.querySelector('#menu')
let navItemsBar = document.querySelector('.nav-items')
let menuBg = document.querySelector('.menu-bg-header')

menu.addEventListener('click', () => {
    menuBg.classList.toggle('change-bg-menu')
   menu.classList.toggle('change-bg-menu')
    navItemsBar.classList.toggle('change')
})