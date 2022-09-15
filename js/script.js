
function hamburgerClick() {
  const navbarLinks = document.querySelector('#hamburgerNav');
  if (navbarLinks.classList.contains('active')) {
    navbarLinks.classList.remove('active');
  } else {
    navbarLinks.classList.add('active');
  }
}