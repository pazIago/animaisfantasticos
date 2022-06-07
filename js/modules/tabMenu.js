export default function initTabMenu() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  
  tabContent[0].classList.add("ativo");
  
  function showContent(index) {
    tabContent.forEach((section) => section.classList.remove("ativo"));
    tabContent[index].classList.add("ativo", tabContent[index].dataset.anime);
  }
  
  tabMenu.forEach((item, index) =>
    item.addEventListener("click", () => showContent(index))
  );
  }