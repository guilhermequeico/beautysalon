const navigation = document.querySelector('.navigation')
const toggle = document.querySelectorAll('.navigation .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        navigation.classList.toggle('show')
    })
}

const links = document.querySelectorAll('.navigation ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        navigation.classList.remove('show')
    })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, #footer .brand, #footer .social`, {interval: 100})

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
    if (window.scrollY >= 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})