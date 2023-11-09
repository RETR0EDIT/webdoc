const fadeUpElements = document.querySelectorAll(".fade-up-element");

function checkFadeUpElements() {
  fadeUpElements.forEach((element, index) => {
    const elementRect = element.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    if (elementRect.top < screenHeight) {
      setTimeout(() => {
        element.classList.add("fade-up-visible");
      }, index * 30);
    } else {
      element.classList.remove("fade-up-visible");
    }
  });
}

window.addEventListener("scroll", checkFadeUpElements);

window.addEventListener("load", checkFadeUpElements);
