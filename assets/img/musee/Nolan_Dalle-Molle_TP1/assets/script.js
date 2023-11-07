const darkModeToggle = document.getElementById('darkModeToggle');
const switchInput = document.querySelector('.switch-input');
const inputs = document.querySelectorAll('input');
const checkbox = document.getElementById('checkbox')

function plus(name) {
    document.getElementsByName(name)[0].value = parseInt(document.getElementsByName(name)[0].value) + 1;
}

function moin(name) {
    if (document.getElementsByName(name)[0].value <= 0) {
        document.getElementsByName(name)[0].value = 0
    } else {
        document.getElementsByName(name)[0].value = parseInt(document.getElementsByName(name)[0].value) - 1;
    }

}

function addChild() {
    var nbChild = document.getElementsByName("enfantI")[0].value;
    for (var i = 1; i <= nbChild; i++) {
        var inputElement = document.createElement('div');
        inputElement.innerHTML =
            `<label for="">Enfant ${i} Age:</label>
            <input type="number"  name="childDiv" id="childDiv${i}" min="0" value="0">`;
    }
    document.getElementById('container-child').appendChild(inputElement);
}

function suprChild() {
    var container = document.getElementById('container-child');
    var divs = container.getElementsByTagName("div");
    var lastDiv = divs[divs.length - 1];
    if (lastDiv) {
        container.removeChild(lastDiv);
    }
}

function validDate() {
    var dateDebut = document.getElementsByName('debut')[0].value;
    var dateFin = document.getElementsByName('fin')[0].value;
    if (dateDebut < dateFin) {
        document.getElementById('errorDate').textContent = '    ';
        return true;
    } else {
        document.getElementById('errorDate').textContent = 'Veuillez entrer les bonnes dates.';
        document.getElementById("resume").textContent = "";
        return false
    }
}

function validChildAge() {
    var childInputs = document.getElementsByName('childDiv');
    var nbAdult = parseInt(document.getElementsByName('adulteI')[0].value);


    var totalPeople = nbAdult;

    for (var i = 0; i < childInputs.length; i++) {
        var age = parseInt(childInputs[i].value);
        if (age >= 1) {
            totalPeople++;
            
        } else if (age < 0) {
            document.getElementById('errorage').textContent = 'Age invalide';
            return false;
        }
    }

    if (totalPeople >= 1) {
        document.getElementById('errorPpl').textContent = '    ';
        document.getElementById('errorAge').textContent = '   ';
        return true;
    } else {
        document.getElementById('errorPpl').textContent = 'Veuillez ajouter au moins une personne';
        document.getElementById("resume").textContent = "";
        return false;
    }
}

function validroom() {

    var valeurchambre = document.getElementById('Chambre').value;

    if (valeurchambre == 0) {

        document.getElementById("errorRoom").textContent = "Veuillez ajouter au moins une Chambre";
        document.getElementById("resume").textContent = "";
        return false
    } else {
        document.getElementById("errorRoom").textContent = "";
        return true
    }
}

function checkEr() {
    if (validDate() == true) {
        if (validChildAge() == true) {
            if (validroom() == true){
            getResume();
        } 
    } else {


        }
    } else {
        document.getElementById('errorDate').textContent = 'Veuillez entrer les bonnes dates.';
    }
}

function getResume() {
    var dateDebut = document.getElementsByName('debut')[0].value;
    var dateFin = document.getElementsByName('fin')[0].value;
    var nbChild = document.getElementsByName("enfantI")[0].value;
    var nbAdult = document.getElementsByName('adulteI')[0].value;
    var nbChambre = document.getElementsByName('chambreI')[0].value;

    var resume = '';



    resume += `<span>Date de début : ${dateDebut}</span><br>
               <span>Date de fin : ${dateFin}</span><br>
               <span>Nombre d'adulte : ${nbAdult}</span><br>
               <span>Nombre d'enfant : ${nbChild}</span><br>`
    for (var i = 1; i <= nbChild; i++) {
        resume += `<span>Enfant ${i} Age: ${document.getElementById('childDiv' + i).value} An(s)</span><br>`;
    }
    resume += `<span>Nombre de chambre : ${nbChambre}</span><br>`;

    document.getElementById('resume').innerHTML = resume;
    if (checkbox.checked){
        document.getElementById('travail').textContent = 'Voyage pour le travail';
    }
    else{

        document.getElementById('travail').textContent = '   ';
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');

    inputs.forEach(input => {
        input.classList.add('dark-mode');
    });
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');

    inputs.forEach(input => {
        input.classList.remove('dark-mode');
    });
    localStorage.setItem('darkMode', 'disabled');
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

switchInput.addEventListener('change', () => {
    const switchSlider = document.querySelector('.switch-slider');
    if (switchInput.checked) {
        switchSlider.style.transform = 'translateX(30px)';
    } else {
        switchSlider.style.transform = 'translateX(0)';
    }
});