document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menuIcon');
  const icon = menuIcon.querySelector('i');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x');
    } else {
      icon.classList.remove('bi-x');
      icon.classList.add('bi-list');
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      icon.classList.remove('bi-x');
      icon.classList.add('bi-list');
    });
  });
});
