<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Document</title>
</head>

<body class="">


  <div id="translated-texts">
    <header>
      <?php include 'utile/nav.html'; ?>
    </header>

    <div class="centre fade-up-element">
      <video id="background-video" autoplay loop muted>
        <source src="assets/video/intro.mp4" type="video/mp4">
      </video>
    </div>

    <section id="partie_1" class="fade-up-element">
      <div class="resumer fade-up-element">
        <div class="resumer_txt fade-up-element">
          <h2 class="translation  ntm" data-lang="fr">Résumer Évènement</h2>
          <!-- anglais -->
          <h2 class="translation hidden ntm" data-lang="en">Event summary</h2>


          <br>
          <br>
          <p class="texte translation" data-lang="fr">
            Lorem Ipsum is simply dummy text of the printing and
            typesettingindustry. Lorem Ipsum has been the industry's standard
            dummy textever since the 1500s, when an unknown printer took a
            galley of typeand scrambled it to make a type specimen book. It
            has survived notonly five centuries, but also the leap into
            electronic typesetting,remaining essentially unchanged. It was
            popularised in the 1960swith the release of Letraset sheets
            containing Lorem Ipsum passages,and more recently with desktop
            publishing software like AlduPageMaker including versions of Lorem
            Ipsum.
          </p>
          <!-- anglais -->
          <p class="texte translation hidden" data-lang="en">
            inserer texte en anglais
          </p>
        </div>
        <div class="img_presentation">
          <img src="assets/img/page_1/image_1.png" alt="image_1" class="image_1">
          <p class="description translation" data-lang="fr">
            Description photo
          </p>
          <!-- anglais -->
          <p class="description translation hidden" data-lang="en">
            inserer texte en anglais
          </p>
        </div>
      </div>
    </section>

    <div class="trait fade-up-element"></div>

    <section id="partie2">
      <div class="fade-up-element">
        <h3 class="h3_section_2 translation fade-up-element" data-lang="fr">
          Antoine Imbault : Organisateur de l’évènement
        </h3>
        <!-- anglais -->
        <h3 class="h3_section_2 translation hidden fade-up-element" data-lang="en">
          Antoine Imbault: Event organizer
        </h3>
        <div class="centre fade-up-element"><video controls><source src="assets/video/Interview_arthur_imbault_vfinal.mp4"></video></div>

        <div class="fade-up-element">
          <h2 class="h2_section_2 translation" data-lang="fr">
            Texte/parole de la vidéo
          </h2>
          <h2 class="h2_section_2 translation hidden" data-lang="en">
            Video text/speech
          </h2>
          <p class="description_video translation" data-lang="fr">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <!-- anglais -->
          <p class="description_video translation hidden" data-lang="en">
            inserer text en anglais
          </p>
        </div>
      </div>
      <div class="trait fade-up-element"></div>
      <section class="planning fade-up-element">
        <h3 class="h3_section_2">Planning</h3>
        <?php include 'utile/article_sacha.html'; ?>
      </section>
      <div class="trait fade-up-element"></div>
      <div class="fade-up-element">
        <h3 class="h3_section_2 translation " data-lang="fr">
          Jean-François COPÉ : Maire de la ville de Meaux
        </h3>
        <!-- anglais -->
        <h3 class="h3_section_2 translation hidden" data-lang="en">
          Jean-François COPÉ : Mayor of Meaux
        </h3>
        <div class="centre"><video src=""></video></div>
        <div>
          <h2 class="h2_section_2 translation" data-lang="fr">
            Texte/parole de la vidéo
          </h2>
          <!-- anglais -->
          <h2 class="h2_section_2 translation hidden" data-lang="en">
            Video text/speech
          </h2>
          <p class="description_video translation" data-lang="fr">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <!-- anglais -->
          <p class="description_video translation hidden" data-lang="en">
            inserer texte en anglais
          </p>
        </div>
      </div>
    </section>

    <div class="trait fade-up-element"></div>

    <h2 class="h2_section_2 translation" data-lang="fr">Carte intéractive</h2>
    <!-- anglais -->
    <h2 class="h2_section_2 translation hidden" data-lang="en">
      Interactive map
    </h2>
    <section class="section_carte">
      <div class="fade-up-element div_carte">
        <div class="img_container">
          <a href="scene.php" id="scene" class="position"><img src="assets/img/page_1/position_1.png" alt=""
              class="img_position">
          </a>
          <div id="popup_scene" class="popup_scene popup">
            <img src="assets/img/page_1/scene.png" alt="scene" class="popup-image_scene popup-image">
            <p class="translation" data-lang="fr">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <!-- anglais -->
            <p class="translation hidden" data-lang="en">
              inserer texte en anglais
            </p>
          </div>
          <a href="lichete.php" id="lichete" class="position"><img src="assets/img/page_1/position_1.png" alt=""
              class="img_position"></a>
          <div id="popup_lichete" class="popup_lichete popup">
            <img src="assets/img/page_1/lichete.png" alt="lichete" class="popup-image_lichete popup-image">
            <p class="translation" data-lang="fr">
            À l'ombre de la cathédrale de Meaux, quelque chose d'exceptionnel s'est déroulé lors de la récente édition de Brie Happy. Un défi audacieux a été relevé, impliquant la création d'une lichette de Brie de Meaux.
          </p>
            <!-- anglais -->
            <p class="translation hidden" data-lang="en">
            In the shadow of Meaux Cathedral, something exceptional happened at the recent Brie Happy event. A daring challenge was taken up, involving the creation of a lichette of Brie de Meaux.
            </p>
          </div>
          <a href="place_principal.php" id="place_principal" class="position"><img
              src="assets/img/page_1/position_1.png" alt="" class="img_position"></a>
          <div id="popup_place_principal" class="popup_place_principal popup">
            <img src="assets/img/page_1/place-principal.png" alt="place-principal"
              class="popup-image_place_principal popup-image">
            <p class="translation" data-lang="fr">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <!-- anglais -->
            <p class="translation hidden" data-lang="en">
              inserer texte en anglais
            </p>
          </div>
          <a href="musee.php" id="musee" class="position"><img src="assets/img/page_1/position_2.png" alt=""
              class="img_position"></a>
          <div id="popup_musee" class="popup_musee popup">
            <img src="assets/img/page_1/musee.png" alt="musee" class="popup-image_musee popup-image">
            <p class="translation" data-lang="fr">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <!-- anglais -->
            <p class="translation hidden" data-lang="en">
              inserer texte en anglais
            </p>
          </div>
          <a href="concours.php" id="concours" class="position"><img src="assets/img/page_1/position_2.png" alt=""
              class="img_position"></a>
          <div id="popup_concours" class="popup_concours popup">
            <img src="assets/img/page_1/concours.png" alt="concours" class="popup-image_concours popup-image">
            <p class="translation" data-lang="fr">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <!-- anglais -->
            <p class="translation hidden" data-lang="en">
              inserer texte en anglais
            </p>
          </div>
          <img src="assets/img/page_1/carte.png" alt="carte" class="carte">
        </div>
      </div>
    </section>
  </div>
  <button id="vibratingButton" class="bouton-chat" onclick="test()"><img src="assets/img/bot/fromage_bot.png"
      alt=""></button>
  <div id="fenetreChatbot" class="fenetre-chatbot">
    <div class="chatbot-header">
      <span class="fermer" onclick="fermerFenetreChatbot()">&times;</span>
      <h2 class="brie">Chatbot Brie de Meaux</h2>
    </div>
    <div class="chatbot-corps">
      <div class="none" id="ball-container">
        <div class="ball" id="ball-1"></div>
        <div class="ball" id="ball-2"></div>
        <div class="ball" id="ball-3"></div>
      </div>
      <div class="boutons-questions">
        <button class="question translation" data-lang="fr" onclick="question_1()">Qu'est-ce que le Brie de Meaux
          ?</button>
        <button class="question translation" data-lang="fr" onclick="question_2()">Comment est-il fabriqué ?</button>
        <button class="question translation" data-lang="fr" onclick="question_3()">Où est produit le Brie de Meaux
          ?</button>
        <button class="question translation" data-lang="fr" onclick="question_4()">Depuis combien de temps le Brie de
          Meaux existe-t-il
          ?</button>
        <!-- anglais -->
        <button class="question translation hidden" data-lang="en" onclick="question_1()">What is Brie de
          Meaux?</button>
        <button class="question translation hidden" data-lang="en" onclick="question_2()">How is it made?</button>
        <button class="question translation hidden" data-lang="en" onclick="question_3()">Where is Brie de Meaux
          produced?</button>
        <button class="question translation hidden" data-lang="en" onclick="question_4()">How long has Brie de Meaux
          been around?
        </button>
      </div>
    </div>
  </div>
  <?php include 'utile/footer.html'; ?>
  <script src="assets/js/bot.js"></script>
  <script src="assets/js/popup.js"></script>
  <script src="assets/js/translate.js"></script>
  <script src="assets/js/fade-up.js"></script>
</body>
</html>