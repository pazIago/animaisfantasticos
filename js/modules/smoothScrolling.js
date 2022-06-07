//scroll
export default function initSmoothScrolling() {
  const innerLinks = document.querySelectorAll('.js-navmenu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const anchor = document.querySelector(href);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }

  innerLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}