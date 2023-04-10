export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');
  if (numeros) {
    function animaNumeros() {
      numeros.forEach((numero) => {
        const total = +numero.dataset.valor;
        const incremento = Math.ceil(total / 100);
        let start = 0;

        const timer = setInterval(() => {
          start += incremento;
          numero.innerText = start;

          if (start > total) {
            numero.innerText = total;
            clearInterval(timer);
          }
        }, 30);
        console.log(total);
      });
    }

    function handleMutation(mutation) {
      const mudou = mutation[0].target.classList.contains('ativo');
      if (mudou) {
        observer.disconnect();
        animaNumeros();
      }
    }

    const observerTarget = document.querySelector('.contador');
    const observer = new MutationObserver(handleMutation);

    observer.observe(observerTarget, { attributes: true });
  }
}
