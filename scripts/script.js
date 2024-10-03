function updateChronometre() {
  const min = minutes < 10 ? "0" + minutes : minutes; // Ajoute un zéro devant les minutes
  const sec = secondes < 10 ? "0" + secondes : secondes; // Ajoute un zéro devant les secondes

  document.getElementById("minutes").textContent = min; // Met à jour le texte des minutes
  document.getElementById("secondes").textContent = sec; // Met à jour le texte des secondes
}

function afficherResultat(score, nbreTotalMotsProposes) {
  // Récupération de la zone dans laquelle on va écrire le score
  let recupererSpanZoneScore = document.querySelector(".zoneScore span");

  // Ecriture du texte
  let affichageScore = `${score} / ${nbreTotalMotsProposes}`;

  // On place le texte à l'intérieur du span.
  recupererSpanZoneScore.innerText = affichageScore;
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition; // Affiche la proposition
}

function afficherEmail(nom, email, score, temps) {
  // Prendre le temps en paramètre
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype ! (Temps: ${temps})`;
  location.href = mailto; // Ouvre le client de messagerie
}

function validerNom(nom) {
  if (nom.length < 2) {
    throw new Error("Le nom est trop court."); // Vérifie si le nom est valide
  }
}

function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(email)) {
    throw new Error("L'email n'est pas valide."); // Vérifie si l'email est valide
  }
}

function afficherMessageErreur(message) {
  let spanErreurMessage = document.getElementById("erreurMessage");

  if (!spanErreurMessage) {
    let popup = document.querySelector(".popup");
    spanErreurMessage = document.createElement("span");
    spanErreurMessage.id = "erreurMessage";
    popup.append(spanErreurMessage); // Ajoute le message d'erreur
  }

  spanErreurMessage.innerText = message; // Affiche le message d'erreur
}

function gererFormulaire(scoreEmail, temps) {
  // Inclure temps ici
  try {
    let baliseNom = document.getElementById("nom");
    let nom = baliseNom.value;
    validerNom(nom); // Valide le nom

    let baliseEmail = document.getElementById("email");
    let email = baliseEmail.value;
    validerEmail(email); // Valide l'email
    afficherMessageErreur("");
    afficherEmail(nom, email, scoreEmail, temps); // Passe le temps à la fonction
  } catch (erreur) {
    afficherMessageErreur(erreur.message); // Affiche l'erreur
  }
}

function lancerJeu() {
  initAddEventListenerPopup(); // Initialise les événements

  let score = 0; // Initialise le score
  let i = 0; // Index de la proposition
  let listePropisition = listeMots; // Liste des mots
  let monBoutonValider = document.getElementById("btnValideMot");
  let inputEcriture = document.getElementById("inputEcriture");

  afficherProposition(listePropisition[i]); // Affiche la première proposition

  inputEcriture.addEventListener("input", () => {
    if (!chronometreActif) {
      chronometreActif = true; // Démarre le chronomètre
      interval = setInterval(() => {
        secondes++; // Incrémente les secondes
        if (secondes === 60) {
          minutes++; // Incrémente les minutes si secondes atteint 60
          secondes = 0; // Réinitialise les secondes
        }
        updateChronometre(); // Met à jour l'affichage
      }, 1000); // Met à jour chaque seconde
    }
  });

  monBoutonValider.addEventListener("click", () => {
    if (inputEcriture.value === listePropisition[i]) {
      score++; // Incrémente le score
    }
    i++; // Passe à la prochaine proposition
    afficherResultat(score, i); // Affiche le score

    inputEcriture.value = ""; // Réinitialise le champ de saisie
    if (listePropisition[i] === undefined) {
      afficherProposition("Le jeu est fini"); // Affiche un message de fin de jeu
      monBoutonValider.disabled = true; // Désactive le bouton
      clearInterval(interval); // Arrête le chronomètre
    } else {
      afficherProposition(listePropisition[i]); // Affiche la prochaine proposition
    }
  });

  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
      if (event.target.value === "1") {
        listePropisition = listeMots; // Utilise la liste de mots
      } else {
        listePropisition = listePhrases; // Utilise la liste de phrases
      }
      afficherProposition(listePropisition[i]); // Affiche la proposition actuelle
    });
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    let scoreEmail = `${score} / ${i}`; // Format du score
    let tempsChronometre = `${minutes}:${
      secondes < 10 ? "0" + secondes : secondes
    }`; // Format du temps
    gererFormulaire(scoreEmail, tempsChronometre); // Appelle la fonction pour gérer le formulaire
  });

  afficherResultat(score, i); // Affiche le score initial
}
