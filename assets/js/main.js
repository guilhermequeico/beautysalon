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

function changeHeaderWhenScroll() {

    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, #footer .brand, #footer .social`, {interval: 100})

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

    if (window.scrollY >= 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('.navigation ul li a[href*='+ sectionId +']').classList.add('active')
        } else {
            document.querySelector('.navigation ul li a[href*='+ sectionId +']').classList.remove('active')
        }
    }
}

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})