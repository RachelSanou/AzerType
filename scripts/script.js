function afficherResultat(score,nbreTotalMotsProposes)
{
    console.log("Votre score est de " + score + " sur " + nbreTotalMotsProposes);
}

function choisirPhrasesOuMots()
{   
    let choix = prompt("Voulez-vous la liste des mots ou celle des phrases ?"); 
    while(choix !== "mots" && choix !== "phrases"){
    choix = prompt("Vous devez choisir entre 'mots' et 'phrases'?");  
    }
    return choix;
}

function lancerBoucleDeJeu(listePropositions)
{
    for(let i = 0; i < listePropositions.length; i++){
        motTapeUtilisateur = prompt("Entrez le mot: " + listePropositions[i]);
        if(motTapeUtilisateur === listePropositions[i]){
            score++;
        }
    }
    return score;
}

function lancerJeu()
{
    let choix = choisirPhrasesOuMots();
    score = 0;
    nbreTotalMotsProposes = 0;

    if(choix === "mots"){
        score = lancerBoucleDeJeu(listeMots);
        nbreTotalMotsProposes = listeMots.length;
    } else {
        score = lancerBoucleDeJeu(listePhrases);
        nbreTotalMotsProposes = listePhrases.length;
    }

    afficherResultat(score, nbreTotalMotsProposes)
}
