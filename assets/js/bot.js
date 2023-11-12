var inputMessage = document.getElementById("inputMessage");
var chatbotCorps = document.querySelector(".chatbot-corps");

function test() {
    var fenetreChatbot = document.getElementById("fenetreChatbot");
    fenetreChatbot.style.display = "block";
    fenetreChatbot.classList.add("chatbot-ouverture");
    initChat();
}

function fermerFenetreChatbot() {
    nettoyerMessages();
    var fenetreChatbot = document.getElementById("fenetreChatbot");
    fenetreChatbot.classList.replace("chatbot-ouverture", "chatbot-fermeture");

    fenetreChatbot.addEventListener("animationend", function () {
        fenetreChatbot.style.display = "none";
        fenetreChatbot.classList.remove("chatbot-fermeture");
        fenetreChatbot.removeEventListener("animationend", arguments.callee);
    });
}

function nettoyerMessages() {
    document.querySelectorAll(".message").forEach(function (message) {
        message.remove();
    });
}

function afficherMessage(message, langue, classes) {
    var div = document.createElement("div");
    div.className = "message " + classes;

    if (langue === "fr") {
        div.classList.add("chat-personne-fr");
    } else if (langue === "en") {
        div.classList.add("chat-personne-en");
    } else {
        div.classList.add("chatbot-message");
    }

    if (classes && !classes.includes("chat-personne-en") && !classes.includes("chat-personne-fr")) {
        div.classList.add("message");
    }

    var p = document.createElement("p");
    p.textContent = message;
    div.appendChild(p);

    chatbotCorps.appendChild(div);
    requestAnimationFrame(() => {
        chatbotCorps.scrollTop = chatbotCorps.scrollHeight;
    });
}

function initChat() {
    afficherMessage("Bonjour! Comment puis-je vous aider?", "", "chatbot-message fr");
    afficherMessage("Hello! How can I help you?", "", "chatbot-message en");
}

function question_1() {
    afficherMessage("Qu'est-ce que le brie de Meaux", "fr");
    afficherMessage("What is Brie de Meaux?", "en");
    afficherMessage("The Brie de Meaux is a raw milk cheese whose designation of origin has been commercially preserved through an AOC (Appellation d'Origine Contrôlée) since 1980. Its name originates from the Brie region and the town of Meaux in France.", "", "chatbot-message en");
    afficherMessage("Le brie de Meaux est un fromage au lait cru dont l'appellation d'origine est préservée commercialement via une AOC depuis 1980. Son appellation vient de la région de la Brie et de la commune de Meaux en France.", "", "chatbot-message fr");
}

function question_2() {
    afficherMessage("Comment est-il fabriqué", "fr");
    afficherMessage("How is it made?", "en");
    afficherMessage("It is made with 25 liters of raw cow's milk for a whole cheese weighing approximately 3.5 kg. After partial skimming at 40°C, the milk is coagulated with rennet of bovine origin only. Then, the curdling process takes place at a temperature lower or equal to 37°C.", "", "chatbot-message en");
    afficherMessage("Il est fabriqué avec 25 litres de lait cru de vache pour un fromage entier d'environ 3,5 kg. Après un écrémage partiel à 40 °C, le lait est emprésuré avec de la présure d'origine bovine uniquement. Ensuite, le caillage se fait à une température inférieure ou égale à 37 ° C.", "", "chatbot-message fr");
}

function question_3() {
    afficherMessage("Où est produit le brie de Meaux", "fr");
    afficherMessage("Where is Brie de Meaux produced?", "en");
    afficherMessage("Today, the production area of Brie de Meaux covers the entire eastern part of the Paris Basin, including the Seine-et-Marne department and parts of the Yonne, Aube, Marne, Meuse, and Haute-Marne departments.", "", "chatbot-message en");
    afficherMessage("Aujourd'hui la zone de production du Brie de Meaux est tout l'est du bassin parisien (département de Seine-et-Marne et les départements de l'Yonne, de l'Aube, de la Marne, de la Meuse, de la Haute-Marne en partie).", "", "chatbot-message fr");
}

function question_4() {
    afficherMessage("Qu'est-ce que le brie de Meaux", "fr");
    afficherMessage("How long has Brie de Meaux been around?", "en");
    afficherMessage("It is presumed that the history of Brie originated in the Abbey of Jouarre, founded in the 7th century.", "", "chatbot-message en");
    afficherMessage("On présume que l'histoire du Brie a pris naissance dans l'abbaye de Jouarre, fondée au VIIème siècle.", "", "chatbot-message fr");
}
