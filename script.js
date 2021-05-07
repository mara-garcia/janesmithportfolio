const openBtn = document.querySelector('.open-nav')
const closeBtn = document.querySelector('.close-nav')
const nav = document.querySelector('.nav-bar')

openBtn.addEventListener('click', () => {
    nav.classList.add('navigation-open')
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('navigation-open')
})