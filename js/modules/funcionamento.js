export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const dias = funcionamento.dataset.semana.split(",").map(Number);
  const horario = funcionamento.dataset.horario.split(",").map(Number);

  const now = new Date();
  const nowDia = now.getDay();
  const nowHora = now.getHours();

  if (dias.includes(nowDia) && horario[0] <= nowHora && nowHora < horario[1]) {
    funcionamento.classList.add("aberto");
  }
}
