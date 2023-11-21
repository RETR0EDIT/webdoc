var inputMessage = document.getElementById("inputMessage");
var chatbotCorps = document.querySelector(".chatbot-corps");
var vibratingButton = document.getElementById('vibratingButton');

document.addEventListener('DOMContentLoaded', function () {
    vibratingButton.classList.add('vibrating');
});

function test() {
    function finAnimation() {
        vibratingButton.style.display = "none";
        vibratingButton.removeEventListener("animationend", finAnimation);
    }
    vibratingButton.classList.add('chatbot-fermeture', 'disparition');
    vibratingButton.classList.remove('vibrating');
    vibratingButton.addEventListener("animationend", finAnimation);

    var fenetreChatbot = document.getElementById("fenetreChatbot");
    fenetreChatbot.style.display = "block";
    fenetreChatbot.classList.add("chatbot-ouverture");
}

function finAnimation() {
    fenetreChatbot.style.display = "none";
    fenetreChatbot.removeEventListener("animationend", finAnimation);
}



function fermerFenetreChatbot() {
    nettoyerMessages();

    vibratingButton.style.display = "block";
    vibratingButton.classList.replace("chatbot-fermeture", "chatbot-ouverture");

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

function afficherMessageAvecDelai(message, langue, classes, delai) {
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

    setTimeout(function () {
        chatbotCorps.appendChild(div);
        requestAnimationFrame(() => {
            chatbotCorps.scrollTop = chatbotCorps.scrollHeight;
        });
    }, delai);
}

afficherMessageAvecDelai("Bonjour! Comment puis-je vous aider?", "", "chatbot-message fr");
afficherMessageAvecDelai("Hello! How can I help you?", "", "chatbot-message en");


function question_1() {
    afficherMessageAvecDelai("Qu'est-ce que le brie de Meaux", "fr");
    afficherMessageAvecDelai("What is Brie de Meaux?", "en");

    var ballContainer = document.getElementById("ball-container");
    ballContainer.classList.remove("none"); // Ajoutez cette ligne pour afficher l'élément
    setTimeout(function() {
        afficherMessageAvecDelai("The Brie de Meaux is a raw milk cheese whose designation of origin has been commercially preserved through an AOC (Appellation d'Origine Contrôlée) since 1980. Its name originates from the Brie region and the town of Meaux in France.", "", "chatbot-message en", 3000);
        afficherMessageAvecDelai("Le brie de Meaux est un fromage au lait cru dont l'appellation d'origine est préservée commercialement via une AOC depuis 1980. Son appellation vient de la région de la Brie et de la commune de Meaux en France.", "", "chatbot-message fr", 3000);
        setTimeout(function() {
            ballContainer.classList.add("none"); // Ajoutez cette ligne pour masquer l'élément après le délai
        }, 3000);
    });
}
function question_2() {
    afficherMessageAvecDelai("Comment est-il fabriqué", "fr");
    afficherMessageAvecDelai("How is it made?", "en");
    var ballContainer = document.getElementById("ball-container");
    ballContainer.classList.remove("none"); // Ajoutez cette ligne pour afficher l'élément
    setTimeout(function() {
    afficherMessageAvecDelai("It is made with 25 liters of raw cow's milk for a whole cheese weighing approximately 3.5 kg. After partial skimming at 40°C, the milk is coagulated with rennet of bovine origin only. Then, the curdling process takes place at a temperature lower or equal to 37°C.", "", "chatbot-message en", 3000);
    afficherMessageAvecDelai("Il est fabriqué avec 25 litres de lait cru de vache pour un fromage entier d'environ 3,5 kg. Après un écrémage partiel à 40 °C, le lait est emprésuré avec de la présure d'origine bovine uniquement. Ensuite, le caillage se fait à une température inférieure ou égale à 37 ° C.", "", "chatbot-message fr", 3000);
    setTimeout(function() {
        ballContainer.classList.add("none"); // Ajoutez cette ligne pour masquer l'élément après le délai
    }, 3000);
});
}

function question_3() {
    afficherMessageAvecDelai("Où est produit le brie de Meaux", "fr");
    afficherMessageAvecDelai("Where is Brie de Meaux produced?", "en");
      var ballContainer = document.getElementById("ball-container");
    ballContainer.classList.remove("none"); // Ajoutez cette ligne pour afficher l'élément
    setTimeout(function() {
    afficherMessageAvecDelai("Today, the production area of Brie de Meaux covers the entire eastern part of the Paris Basin, including the Seine-et-Marne department and parts of the Yonne, Aube, Marne, Meuse, and Haute-Marne departments.", "", "chatbot-message en", 3000);
    afficherMessageAvecDelai("Aujourd'hui la zone de production du Brie de Meaux est tout l'est du bassin parisien (département de Seine-et-Marne et les départements de l'Yonne, de l'Aube, de la Marne, de la Meuse, de la Haute-Marne en partie).", "", "chatbot-message fr", 3000);
    setTimeout(function() {
        ballContainer.classList.add("none"); // Ajoutez cette ligne pour masquer l'élément après le délai
    }, 3000);
});
}

function question_4() {
    afficherMessageAvecDelai("Qu'est-ce que le brie de Meaux", "fr");
    afficherMessageAvecDelai("How long has Brie de Meaux been around?", "en");
    var ballContainer = document.getElementById("ball-container");
    ballContainer.classList.remove("none"); // Ajoutez cette ligne pour afficher l'élément
    setTimeout(function() {
    afficherMessageAvecDelai("It is presumed that the history of Brie originated in the Abbey of Jouarre, founded in the 7th century.", "", "chatbot-message en", 3000);
    afficherMessageAvecDelai("On présume que l'histoire du Brie a pris naissance dans l'abbaye de Jouarre, fondée au VIIème siècle.", "", "chatbot-message fr", 3000);
    setTimeout(function() {
        ballContainer.classList.add("none"); // Ajoutez cette ligne pour masquer l'élément après le délai
    }, 3000);
});
}
