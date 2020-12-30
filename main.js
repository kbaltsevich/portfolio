const menuVisibleButon = document.querySelector('.header__menu-img')
const nav = document.querySelector('.nav')
const anchors = document.querySelectorAll('a[href*="#"]')

const visibleBurgerMenu = () => {
    menuVisibleButon.classList.toggle('header__menu-img--rotate')
    return nav.classList.toggle('nav__visible')
}


menuVisibleButon.addEventListener('click', visibleBurgerMenu)


for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    visibleBurgerMenu()
  })
}

