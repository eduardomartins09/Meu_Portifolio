const btn = document.querySelector("#back-to-top")

btn.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

function menuShow() {
    let menuMobile = document.querySelector('header .mobile-menu')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "imgs/close_white_36dp.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "imgs/menu_white_36dp.svg"
    }
}