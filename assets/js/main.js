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