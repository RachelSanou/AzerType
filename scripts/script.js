function afficherResultat(score,nbreTotalMotsProposes)
{
    // Récupération de la zone dans laquelle on va écrire le score
    let recupererSpanZoneScore = document.querySelector(".zoneScore span");

    // Ecriture du texte
    let affichageScore = `${score} / ${nbreTotalMotsProposes}`;

    // On place le texte à l'intérieur du span.
    recupererSpanZoneScore.innerText = affichageScore;

    // console.log("Votre score est de " + score + " sur " + nbreTotalMotsProposes);
}

// function choisirPhrasesOuMots()
// {   
//     let choix = prompt("Voulez-vous la liste des mots ou celle des phrases ?"); 
//     while(choix !== "mots" && choix !== "phrases"){
//     choix = prompt("Vous devez choisir entre 'mots' et 'phrases'?");  
//     }
//     return choix;
// }

// function lancerBoucleDeJeu(listePropositions)
// {
//     for(let i = 0; i < listePropositions.length; i++){
//          motTapeUtilisateur = prompt("Entrez le mot: " + listePropositions[i]);
//         if(motTapeUtilisateur === listePropositions[i]){
//             score++;
//         }
//     }
//     return score;
// }

function afficherProposition (proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
 }
 
 function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function validerNom(nom) {
    if(nom.length < 2){
        throw new Error("Le nom est trop court. ");
    }
}

function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if(!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas valide. ");
    }
}

function afficherMessageErreur(message) {

    let spanErreurMessage = document.getElementById("erreurMessage");

    if (!spanErreurMessage){
        let popup = document.querySelector(".popup");
        spanErreurMessage = document.createElement("span");
        spanErreurMessage.id = "erreurMessage";

        popup.append(spanErreurMessage);
    }

    spanErreurMessage.innerText = message;  
}

function gererFormulaire (scoreEmail) {
    try{
        let baliseNom = document.getElementById("nom");
        let nom = baliseNom.value;
        validerNom(nom);

        let baliseEmail = document.getElementById("email");
        let email = baliseEmail.value;
        validerEmail(email);
        afficherMessageErreur("");
        afficherEmail(nom, email, scoreEmail);

    } catch(erreur) {
       afficherMessageErreur(erreur.message);
    }
    
}

function lancerJeu()
{
    initAddEventListenerPopup();
    // let choix = choisirPhrasesOuMots();
    let score = 0;
    // nbreTotalMotsProposes = 0;

    // if(choix === "mots"){
    //     score = lancerBoucleDeJeu(listeMots);
    //     nbreTotalMotsProposes = listeMots.length;
    // } else {
    //     score = lancerBoucleDeJeu(listePhrases);
    //     nbreTotalMotsProposes = listePhrases.length;
    // }
    let i = 0;
    let listePropisition = listeMots;
    let monBoutonValider = document.getElementById("btnValideMot");
    let inputEcriture = document.getElementById("inputEcriture");

    afficherProposition(listePropisition[i]);

    monBoutonValider.addEventListener("click", () => {
        //console.log(inputEcriture.value);

        if(inputEcriture.value === listePropisition[i]){
            score++;
        }
        i++;
        afficherResultat(score, i);
    
        inputEcriture.value = '';
        if(listePropisition[i] === undefined){
            afficherProposition("Le jeu est fini");
            monBoutonValider.disabled = true;
        } else {
            afficherProposition(listePropisition[i]);
        }
           
    });

    let listeBtnRadio = document.querySelectorAll(".optionSource input");
    for(let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener("change", (event) =>{
            console.log(event.target.value);
            if (event.target.value === "1") {
                listePropisition = listeMots;
            } else {
                listePropisition = listePhrases;
            }
            afficherProposition(listePropisition[i]);
    })
 }

    let form = document.querySelector("form");
     form.addEventListener("submit", (event) => {
        event.preventDefault();
        let scoreEmail = `${score} / ${i}`;
        gererFormulaire(scoreEmail);   
 })

    afficherResultat(score, i);
}
 

