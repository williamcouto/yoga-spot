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
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 13
        },
        360: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
})

// Abrir e fechar o menu em dispositivos movéis
const menu = document.querySelector('#menu-btn')
const navItemsBar = document.querySelector('.nav-items')
const menuBg = document.querySelector('.menu-bg-header')

menu.addEventListener('click', () => {
    menuBg.classList.toggle('menu-bg-active')
    navItemsBar.classList.toggle('nav-open')
})

//Animação dos números
let numStats = document.querySelectorAll('.nums')
function updateNumStats(){
    numStats.forEach((numsValue) => {
        let initValue = 0
        let finalValue = numsValue.getAttribute('data-value-stat')

        let duration = Math.floor(2000 / finalValue)
        let countStat = setInterval(function(){
            initValue += 1
            numsValue.textContent = initValue

            if(initValue > finalValue){
                clearInterval(countStat)
            }
        }, duration)
    })
}
document.addEventListener('DOMContentLoaded', () => {
    updateNumStats()
})