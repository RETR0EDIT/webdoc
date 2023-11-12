const darkModeToggle = document.getElementById("darkModeToggle");
const switchInput = document.querySelector(".switch-input");
const checkbox = document.getElementById("checkbox");
const inputs = document.querySelectorAll("input");
const switchSlider = document.querySelector(".switch-slider");
const trait = document.getElementsByClassName("trait");

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  inputs.forEach((input) => {
    input.classList.add("dark-mode");
  });
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  inputs.forEach((input) => {
    input.classList.remove("dark-mode");
  });
  localStorage.setItem("darkMode", "disabled");
  document.body.style.transition = "background-color 0.3s, color 0.3s";
}

const darkModeStatus = localStorage.getItem("darkMode");

if (darkModeStatus === "enabled") {
  enableDarkMode();
  darkModeToggle.checked = true;
  switchSlider.style.transform = "translateX(30px)";
} else {
  disableDarkMode();
  darkModeToggle.checked = false;
}

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

switchInput.addEventListener("change", () => {
  if (switchInput.checked) {
    switchSlider.style.transform = "translateX(30px)";
  } else {
    switchSlider.style.transform = "translateX(0)";
  }
});


let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-260px";
  }

  prevScrollPos = currentScrollPos;
}