document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    // Abrir/fechar menu ao clicar no ícone
    menuIcon.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link de navegação
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  });