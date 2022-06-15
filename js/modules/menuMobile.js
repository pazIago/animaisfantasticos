/* eslint-disable import/extensions */
import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="btn"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    if (menuBtn) {
      menuList.classList.add("ativo");
      menuBtn.classList.add("ativo");
      outsideClick(menuList, () => {
        menuList.classList.remove("ativo");
        menuBtn.classList.remove("ativo");
      });
    }
  }
  menuBtn.addEventListener("click", openMenu);
}
