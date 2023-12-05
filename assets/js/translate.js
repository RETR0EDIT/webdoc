const translations = document.querySelectorAll(".translation");
const lang = "fr";
const language = "fr";
function en() {}

function fr() {}
document.getElementById("toggle-eng").addEventListener("click", en);
document.getElementById("toggle-fr").addEventListener("click", fr);

function setEnglishMode() {
  setLanguageMode("en");
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
  setLanguageMode("fr");
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

function setLanguageMode(language) {
  translations.forEach((element) => {
    const lang = element.getAttribute("data-lang");
    element.style.display = lang === language ? "block" : "none";
  });

  document.documentElement.lang = language; // Changer l'attribut lang de la balise HTML
  document.documentElement.lang = language; // Changer l'attribut lang de la balise HTML
  document.documentElement.id = language === "en" ? "en" : "fr"; // Ajouter l'attribut id en fonction de la langue
  localStorage.setItem("language", language);
}
