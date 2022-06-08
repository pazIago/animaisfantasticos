//scroll animation

export default function initScrollAnimation() {
  const sectionList = document.querySelectorAll(".js-scroll");

  if (sectionList.length) {
    const windowSlice = window.innerHeight * 0.6;

    function animaScroll() {
      sectionList.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - windowSlice;
        if (sectionTop < 0) {
          if (!item.classList.contains('ativo'))
          item.classList.add("ativo");
        } 
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
