export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data="menu"] a[href^="#"]');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    linksInternos.forEach((item) => {
      item.addEventListener('click', scrollToSection);
    });
  }
}
