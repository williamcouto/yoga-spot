var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 70,
    loop: true,
    effect: 'fade',
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
let menu = document.querySelector('.menu-bars')
let menuBg = document.querySelector('.menu-bg-header')
menu.addEventListener('click', () => {
    menu.classList.toggle('changeMenu')
    menuBg.classList.toggle('change-bg-menu')
})