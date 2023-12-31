function previous1() {
  const widthSlider = document.querySelector(".slider2").offsetWidth;
  const sliderContent = document.querySelector(".slider_content2");
  const scrollLeft = sliderContent.scrollLeft;
  const itemsSlider = sliderContent.querySelectorAll(".slider_content_item2");

  if (scrollLeft === 0) {
    sliderContent.scrollLeft = widthSlider * (itemsSlider.length - 1);
  } else {
    sliderContent.scrollLeft -= widthSlider;
  }
}

function next1() {
  const widthSlider = document.querySelector(".slider2").offsetWidth;
  const sliderContent = document.querySelector(".slider_content2");
  const scrollLeft = sliderContent.scrollLeft;
  const itemsSlider = sliderContent.querySelectorAll(".slider_content_item2");

  if (scrollLeft + widthSlider >= widthSlider * (itemsSlider.length - 1)) {
    sliderContent.scrollLeft = 0;
  } else {
    sliderContent.scrollLeft += widthSlider;
  }
}

(function () {
  const carousel = document.querySelector(".carousel");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  let faceCount = 3;
  let stepCount = 30;
  let count = -30;

  nextStep(count);

  prev.addEventListener("click", () => {
    let stepForward = (count += stepCount);
    nextStep(stepForward);
  });

  next.addEventListener("click", () => {
    let stepReward = (count -= stepCount);
    nextStep(stepReward);
  });

  function nextStep(x) {
    if (x < -60) {
      x = 0;
      count = 0;
    } else if (x >= 0 && x !== 0) {
      x = -60;
      count = -60;
    }

    carousel.style.transform = `rotateY(${x}deg)`;
  }
})();
