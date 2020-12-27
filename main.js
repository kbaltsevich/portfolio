const menuVisibleButon = document.querySelector('.header__menu-img')
const nav = document.querySelector('.nav')


menuVisibleButon.addEventListener('click', () => {
    menuVisibleButon.classList.toggle('header__menu-img--rotate')
    return nav.classList.toggle('nav__visible')
})