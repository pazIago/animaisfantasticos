import outsideClick from "./outsideClick.js";

export default function initDropown() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach((menu) => {
    menu.addEventListener("touchstart", handleClick);
    menu.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, () => {
      this.classList.remove("ativo");
    });
  }
}
