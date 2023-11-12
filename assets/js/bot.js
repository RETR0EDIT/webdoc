var inputMessage = document.getElementById("inputMessage");
var chatbotCorps = document.querySelector(".chatbot-corps");
var currentLanguage = "fr"; 

function test() {
    var fenetreChatbot = document.getElementById("fenetreChatbot");
    fenetreChatbot.style.display = "block";
    fenetreChatbot.classList.add("chatbot-ouverture");
    initChat();
}

function fermerFenetreChatbot() {
    nettoyerMessages();
    var fenetreChatbot = document.getElementById("fenetreChatbot");
    fenetreChatbot.classList.remove("chatbot-ouverture");
    fenetreChatbot.classList.add("chatbot-fermeture");

    fenetreChatbot.addEventListener("animationend", function () {
        fenetreChatbot.style.display = "none";
        fenetreChatbot.classList.remove("chatbot-fermeture");
        fenetreChatbot.removeEventListener("animationend", arguments.callee);
    });
}

function nettoyerMessages() {
    var messages = document.querySelectorAll(".message");
    messages.forEach(function (message) {
        message.remove();
    });
}

function afficherMessage(message, ecriture) {
    var div = document.createElement("div");
    div.className = "message";

    if (ecriture) {
        div.classList.add("chatbot-ecriture");
    } else if (message.includes("Chatbot")) {
        div.classList.add("chatbot-message");
    } else if (message.includes("Vous")) {
        div.classList.add("chat-personne");
    }

    var p = document.createElement("p");
    p.textContent = message;

    // Ajouter la classe en ou fr en fonction de la langue courante
    p.classList.add(currentLanguage);

    div.appendChild(p);

    chatbotCorps.appendChild(div);
}

function initChat() {
    afficherMessage("Chatbot : Bonjour! Comment puis-je vous aider?");

    var questions = [
        "Qu'est-ce que le Brie de Meaux?",
        "Comment est-il fabriqué?",
        "Où est produit le Brie de Meaux?",
        "Depuis combien de temps le Brie de Meaux existe-t-il ?"
    ];

    var boutonsQuestions = document.createElement("div");
    boutonsQuestions.className = "boutons-questions";

    questions.forEach(function (question) {
        var bouton = document.createElement("button");
        bouton.textContent = question;
        bouton.classList.add("question"); // Ajoute la classe "question" au bouton
        bouton.onclick = function () {
            poserQuestion(question);
        };
        boutonsQuestions.appendChild(bouton);
    });

    chatbotCorps.appendChild(boutonsQuestions);
}

function traiterMessageUtilisateur(message) {
    afficherMessage("Vous : " + message);

    if (inputMessage) {
        inputMessage.value = "";
    }

    if (message.toLowerCase().includes("qu'est-ce que le brie de meaux")) {
        afficherMessage("Chatbot : Le brie de Meaux est un fromage au lait cru dont l'appellation d'origine est préservée commercialement via une AOC depuis 1980. Son appellation vient de la région de la Brie et de la commune de Meaux en France.");
    } else if (message.toLowerCase().includes("comment est-il fabriqué")) {
        afficherMessage("Chatbot : Il est fabriqué avec 25 litres de lait cru de vache pour un fromage entier d'environ 3,5 kg. Après un écrémage partiel à 40 °C, le lait est emprésuré avec de la présure d'origine bovine uniquement. Ensuite, le caillage se fait à une température inférieure ou égale à 37 ° C.");
    } else if (message.toLowerCase().includes("où est produit le brie de meaux")) {
        afficherMessage("Chatbot : Aujourd'hui la zone de production du Brie de Meaux est tout l'est du bassin parisien (département de Seine-et-Marne et les départements de l'Yonne, de l'Aube, de la Marne, de la Meuse, de la Haute-Marne en partie).");
    } else if (message.toLowerCase().includes("depuis combien de temps le brie de meaux existe-t-il")) {
        afficherMessage("Chatbot : On présume que l'histoire du Brie a pris naissance dans l'abbaye de Jouarre, fondée au VIIème siècle.");
    } else {
        afficherMessage("Chatbot : Je ne comprends pas. Posez-moi une autre question sur le Brie de Meaux.");
    }
}

function envoyerMessage() {
    var message = inputMessage.value;
    if (message.trim() !== "") {
        traiterMessageUtilisateur(message);
    }
}

function poserQuestion(question) {
    traiterMessageUtilisateur(question);
}
