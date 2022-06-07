//accordion faq
export default function initAccordion() {
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
  }