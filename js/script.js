document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('menu-opened'); // <- isso aciona a animação

    // Remove "bi-list" e "bi-x" desnecessários (agora é feito com CSS)
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('menu-opened');
    });
  });
});
