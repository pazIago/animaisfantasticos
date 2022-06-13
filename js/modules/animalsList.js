import initAnimaNumbers from "./animaNumbers.js";
export default function initCreateAnimals() {}

async function fetchAnimals(url) {
  const animalsResponse = await fetch(url);
  const animalsJSON = await animalsResponse.json();

  animalsJSON.forEach((animal) => {
    createAnimal(animal);
  });
  initAnimaNumbers();
}

function createAnimal(animal) {
  const appendTarget = document.querySelector(".number-grid");
  const div = document.createElement("div");
  div.classList.add("numero-animal");
  div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
  appendTarget.appendChild(div);
}

fetchAnimals("./js/modules/animals.json");
