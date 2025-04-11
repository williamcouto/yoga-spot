var swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 70,
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