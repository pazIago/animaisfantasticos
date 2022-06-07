export default function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener("click", handleOutside);
  html.addEventListener("toucstart", handleOutside);
  function handleOutside(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("click", handleOutside);
      html.removeEventListener("touchstart", handleOutside);
      callback();
    }
  }
}