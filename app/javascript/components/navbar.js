function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  const whiteLogo = document.querySelector('.white-logo')
  const greyLogo = document.querySelector('.grey-logo')

  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      navbar.classList.add('navbar-wagon-white');
      whiteLogo.style.display ='none'
      greyLogo.style.display = 'block'
    } else {
      navbar.classList.remove('navbar-wagon-white');
      whiteLogo.style.display = 'block'
      greyLogo.style.display = 'none'
    }
  });
}

export { initUpdateNavbarOnScroll };
