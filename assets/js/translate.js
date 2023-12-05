const translations = document.querySelectorAll(".translation");

function en() {}

function fr() {}
document.getElementById("toggle-eng").addEventListener("click", en);
document.getElementById("toggle-fr").addEventListener("click", fr);


const selectedLanguage = localStorage.getItem("language");
const isFirstTimeVisit = localStorage.getItem("firstTimeVisit");

if (isFirstTimeVisit === null || isFirstTimeVisit === "true") {
  // Si c'est la première visite, définissez la langue par défaut comme le français
  setFrenchMode();
  // Exécutez la fonction fr() lors de la première visite
  fr();
  // Cachez tous les éléments avec data-lang="en"
  translations.forEach((element) => {
    const lang = element.getAttribute("data-lang");
    if (lang === "en") {
      element.style.display = "none";
    }
  });
  // Mettez à jour le marqueur isFirstTimeVisit pour indiquer que ce n'est plus la première visite
  localStorage.setItem("firstTimeVisit", "false");
} else if (selectedLanguage === "fr") {
  // Si la langue sélectionnée dans le stockage local est le français, définissez le mode français
  setFrenchMode();
} else {
  // Sinon, définissez le mode anglais par défaut
  setEnglishMode();
}

document.getElementById("toggle-eng").addEventListener("click", () => {
  setEnglishMode();
});

document.getElementById("toggle-fr").addEventListener("click", () => {
  setFrenchMode();
});



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
