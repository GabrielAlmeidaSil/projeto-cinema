document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('menu-opened');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('menu-opened');
    });
  });
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const header = document.querySelector('header');



    const linksComTransicao = document.querySelectorAll('a.button-header');

    linksComTransicao.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            const destino = this.getAttribute('href');
            const transition = document.getElementById('transition-screen');
            transition.classList.add('active');

            setTimeout(() => {
                window.location.href = destino;
            }, 500); 
        });
    });


const backBtn = document.querySelector('.back-header');

    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const destino = this.getAttribute('href');
            const transition = document.getElementById('transition-screen');
            transition.classList.add('active');

            setTimeout(() => {
                window.location.href = destino;
            }, 500);
        });
    }


document.addEventListener('DOMContentLoaded', function () {
  const transition = document.getElementById('transition-screen');
  if (transition) {
      transition.classList.remove('active');
  }
});


