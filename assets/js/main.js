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