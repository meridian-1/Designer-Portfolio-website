const homeLink = document.querySelector('.header__link[href="/"]')
if (window.location.pathname === '/') {
  homeLink.addEventListener('click', (e) => e.preventDefault())
}
