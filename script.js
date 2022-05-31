//tabmenu images

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

tabContent[0].classList.add("ativo");

function showContent(index) {
  tabContent.forEach((section) => section.classList.remove("ativo"));
  tabContent[index].classList.add("ativo");
}

tabMenu.forEach((item, index) =>
  item.addEventListener("click", () => showContent(index))
);

//accordion faq

const questionList = document.querySelectorAll(".js-accordion dt");
questionList[0].classList.add("ativo");
questionList[0].nextElementSibling.classList.add("ativo");

function showAnswer() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo");
}

questionList.forEach((question) =>
  question.addEventListener("click", showAnswer)
);

//scroll
function initSmoothScrolling() {
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

initSmoothScrolling();

//scroll animation

function initScrollAnimation() {
  const sectionList = document.querySelectorAll(".js-scroll");

  if (sectionList.length) {
    const windowSlice = window.innerHeight * 0.6;

    function animaScroll() {
      sectionList.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top - windowSlice;
        if (sectionTop < 0) {
          item.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initScrollAnimation();
