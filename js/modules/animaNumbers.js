/* eslint-disable no-param-reassign */
export default function initAnimaNumbers() {function animaNumeros() {
  const numbers = document.querySelectorAll("[data-numero]");

  numbers.forEach((number) => {
    const memory = +number.innerText;
    const increase = memory / 100;

    let start = 0;
    const timer = setInterval(() => {
      start += increase;
      const text = start.toFixed();
      number.innerText = text;
      if (start > memory) {
        number.innerText = memory;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}
function handleMutation(change) {
  if (change[0].target.classList.contains("ativo")) {
    animaNumeros();
  }
}

const observerTarget = document.querySelector(".numeros");
const observer = new MutationObserver(handleMutation);
observer.observe(observerTarget, { attributes: true });}


