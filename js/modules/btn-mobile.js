export default function initBtnMobile() {
  const btn = document.getElementById('btn-mobile');

  if (btn) {
    function toggleMenu(event) {
      if (event.type === 'touchstart') {
        event.preventDefault();
      }
      const header = document.querySelector('.header-menu');
      const nav = document.getElementById('nav');

      nav.classList.toggle('ativo');
      header.classList.toggle('ativo');

      const ativo = nav.classList.contains('ativo');
      event.currentTarget.setAttribute('aria-expanded', ativo);

      if (ativo) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
      } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
      }
    }

    btn.addEventListener('click', toggleMenu);
    btn.addEventListener('touchstart', toggleMenu);

    const links = document.querySelectorAll('.header-menu a');

    function fecharMenu() {
      const header = document.querySelector('.header-menu');
      const nav = document.getElementById('nav');

      nav.classList.remove('ativo');
      header.classList.remove('ativo');
    }

    links.forEach((link) => {
      link.addEventListener('click', fecharMenu);
    });
  }
}
