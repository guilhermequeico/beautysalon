const navigation = document.querySelector('.navigation')
const toggle = document.querySelectorAll('.navigation .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        navigation.classList.toggle('show')
    })
}