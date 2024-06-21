/*console.log("Hello World ! ça va");

//Test avec booléen
let motTapeOk = true;

if(motTapeOk){
    console.log("Bravo, vous avez correctement tapé le mot");
} else {
    console.log("Echec, le mot n'est pas correct");
}
//else est optionnel , j'aurais pu m'arrêter au if si je ne voulais rien afficher quand la condition est fausse

//Test avec opérateurs de comparaison
const motApplication = "Bonjour";
let motUtilisateur = prompt("Entrez un mot: " + motApplication); //prompt fais apparaitre un pop up pour que l'utilisateur entre mot

if(motUtilisateur === motApplication){
    console.log("Bravo !");
} else {
    console.log("Vous avez fait une faute de frappe");
}*/

// Condition Switch Case
/*switch(motUtilisateur) /*entre parenthèse on met la valeur à tester{
    case motApplication:
        console.log("Bravo !");
        break;
    case "Gredin":
        console.log("Rester correct !");
        break;
    case "Mécréant":
        console.log("Restez correct !");
        break;
    case "Vilain":
        console.log("Soyez gentil !");
        break;
    default:
        console.log("Vous avez fait une faute de frappe .");
}
/* 
Ici, je teste motUtilisateur : 
-si l’utilisateur a tapé “Gredin”, alors c’est le premier console.log qui va s’exécuter ;
-s’il a tapé “Mécréant”, c’est le second console.log qui s’exécute. ;
-s’il a tapé “Vilain”, c’est le troisième ;
-s’il a rentré autre chose (default), alors c’est le dernier console.log qui s’exécute.
*/

//Exercice:
const listeMots = ["Cachalot", "Pétunia", "Serviette"];
let score = 0;
let motTapeUtilisateur = prompt("Entrez le mot: " + listeMots[0]);


if(motTapeUtilisateur === listeMots[0]){
    console.log("Vous avez tapé le bon mot !");
    score++;
    console.log(score);
   
} else {
    console.log("Vous avez fait une faute de frappe !");
}

motTapeUtilisateur = prompt("Entrez le mot : " + listeMots[1]); // motTapeUtilisateur est déjà déclaré plus haut alors je viens juste réutilisé la même variable 
if(motTapeUtilisateur === listeMots[1]){
    console.log("Vous avez tapé le bon mot !");
    score++;
    console.log(score);
} else {
    console.log("Vous avez fait une faute de frappe !")
}

motTapeUtilisateur = prompt("Entrez le mot : " + listeMots[2]);
if(motTape === listeMots[2]){
    console.log("Vous avez tapé le bon mot !");
    score++;
    console.log(score);
} else {
    console.log("Vous avez fait une faute de frappe !");
}

console.log("Votre score est de : " + score + " sur 3")