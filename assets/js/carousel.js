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
