<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
    <title>Document</title>
  </head>
  <body class="">
    <div id="translated-texts">
      <header>
      <?php include 'utile/nav.html'; ?>
      </header>
      <h1 id="titre">BRIE HAPPY</h1>
      <h2 id="date">2023</h2>
      <div class="centre">
        <video src="" class="video1"></video>
      </div>
      <section id="partie_1">
        <div class="resumer fade-up-element">
          <div class="resumer_txt">
            <h2 class="translation " data-lang="fr">Résumer Évènement</h2>
            <!-- anglais -->
            <h2 class="translation hidden" data-lang="en">Event summary</h2>

            <br /><br />
            <p class="texte translation" id="resume_evenement" data-lang="fr">
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
            <p
              class="texte translation hidden"
              id="resume_evenement"
              data-lang="en"
            >
              inserer texte en anglais
            </p>
          </div>
          <div>
            <img
              src="assets/img/page 1/image_1.png"
              alt="image_1"
              class="image_1"
            />
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
        <div class="centre fade-up-element"><video src=""></video></div>

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

      <div class="trait fade-up-element">

      <h2 class="h2_section_2 translation" data-lang="fr">Carte intéractive</h2>
      <!-- anglais -->
      <h2 class="h2_section_2 translation hidden" data-lang="en">
        Interactive map
      </h2>
      </div>
      <section class="section_carte">
      <div class="fade-up-element">
        <div class="img_container">
          <a href="scene.php" id="scene" class="position"
            ><img
              src="assets/img/page 1/position_1.png"
              alt=""
              class="img_position"
          /></a>
          <div id="popup_scene" class="popup_scene popup">
            <img
              src="assets/img/page 1/scene.png"
              alt="scene"
              class="popup-image_scene"
            />
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

          <a href="lichete.php" id="lichete" class="position"
            ><img
              src="assets/img/page 1/position_1.png"
              alt=""
              class="img_position"
          /></a>
          <div id="popup_lichete" class="popup_lichete popup">
            <img
              src="assets/img/page 1/lichete.png"
              alt="lichete"
              class="popup-image_lichete"
            />
            <p class="translation" data-lang="fr" data-lang="fr">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <!-- anglais -->
            <p class="translation hidden" data-lang="en">
              inserer texte en anglais
            </p>
          </div>

          <a href="place_principal.php" id="place_principal" class="position"
            ><img
              src="assets/img/page 1/position_1.png"
              alt=""
              class="img_position"
          /></a>
          <div id="popup_place_principal" class="popup_place_principal popup">
            <img
              src="assets/img/page 1/place-principal.png"
              alt="place-principal"
              class="popup-image_place_principal"
            />
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

          <a href="musee.php" id="musee" class="position"
            ><img
              src="assets/img/page 1/position_2.png"
              alt=""
              class="img_position"
          /></a>
          <div id="popup_musee" class="popup_musee popup">
            <img
              src="assets/img/page 1/musee.png"
              alt="musee"
              class="popup-image_musee"
            />
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

          <a href="concours.php" id="concours" class="position"
            ><img
              src="assets/img/page 1/position_2.png"
              alt=""
              class="img_position"
          /></a>
          <div id="popup_concours" class="popup_concours popup">
            <img
              src="assets/img/page 1/concours.png"
              alt="concours"
              class="popup-image_concours"
            />
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

          <img src="assets/img/page 1/carte.png" alt="carte" class="carte" />
        </div>
        </div>
      </section>

      
    </div>
    <?php include 'utile/footer.html'; ?>
    <script src="assets/js/popup.js"></script>
    <script src="assets/js/translate.js"></script>
    <script src="assets/js/fade-up.js"></script>
  </body>
</html>
