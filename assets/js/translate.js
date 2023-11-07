const translations = document.querySelectorAll(".translation");
function en() {}

function fr() {}
document.getElementById("toggle-eng").addEventListener("click", en);
document.getElementById("toggle-fr").addEventListener("click", fr);

function setEnglishMode() {
  translations.forEach((element) => {
    const lang = element.getAttribute("data-lang");
    if (lang === "en") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  localStorage.setItem("language", "en");
}

function setFrenchMode() {
  translations.forEach((element) => {
    const lang = element.getAttribute("data-lang");
    if (lang === "fr") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  localStorage.setItem("language", "fr");
}

const selectedLanguage = localStorage.getItem("language");

if (selectedLanguage === "en") {
  setEnglishMode();
} else if (selectedLanguage === "fr") {
  setFrenchMode();
}

document.getElementById("toggle-eng").addEventListener("click", () => {
  setEnglishMode();
});

document.getElementById("toggle-fr").addEventListener("click", () => {
  setFrenchMode();
});
