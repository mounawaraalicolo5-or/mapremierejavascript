//je programme les evenement qui sont déclenchés du cpoté HTML 



const elementBoutonValiderdate = document.querySelector("#validerdate");


let elementSpanDateDuJour = document.querySelector("#dateDujour");
let elementSpanDateDuJourFormat2 = document.querySelector("#DateDuFormat2");


//je declare un objet date en utulisant la classe Date ()
const maDate = new Date();



elementBoutonValiderdate.addEventListener("click",function() {
    // je decris l'action a réaliser lorsque je clique sur le bouton valider
    console.log("### je suis dans le bouton Valider Date ###");

    elementSpanDateDuJour.innerHTML = maDate;

    elementSpanDateDuJourFormat2.textContent = maDate.toLocaleDateString();




});

// je recupere la balise form avec ces enfants , ensuite je stock la balise dans la variable elementform.

let elementform = document.querySelector('#userForm');


// j'associe l'evenement submit
elementform.addEventListener("submit", ( event) => {
event.preventDefault();
console.log("#### je suis l'evenement submit du formulaire");

const nom = document.getElementById("nom").value;
const prenom = document.getElementById("prenom").value;
const situation = document.getElementById("situation").value;
const AnneeDeNaissance = document.getElementById("AnneeDeNaissance").value;



console.log("NOM saisie:" ,nom);
console.log("PRENOM saisie:",prenom);
console.log("SITUATION saisie:",situation);
console.log("ANNÉE DE NAISSANCE" , AnneeDeNaissance);


});

// 1.on definit lannée actuelle
const aujourdhui = new Date ();

//  2.fonction pour calculer l'age
function calculAge(AnneeDeNaissance) {
    return aujourdhui.getFullYear() - AnneeDeNaissance;
}

// 3.on recupere l'input de saisie
const inputAnnee = document.getElementById("AnneeDeNaissance");

//4. on recupere la div des resultat 
const divResultat = document.getElementById("resultat");

// 5.on ecoute l'evenement. input signifie que a chaque fois que l'utilisateur tape

inputAnnee.addEventListener("input", function() {
 const anneeValeur = inputAnnee.value;

 //si ce n'est pas un nombre ou si c'est vide on nettoie
 if (!anneeValeur || isNaN(anneeValeur)){
    divResultat.textContent ="";
    return;
 }

 // on crée une variable pour stocker le resultat du calcul de l'age
 const age = calculAge(anneeValeur);


 //variable pour le message mineur / majeur
 let statut;

 if(age < 18) {
    statut = "vous etes mineur.";
 } else {
    statut = "vous etes majeur.";

 }


 //affiche l'age + le statut
 divResultat.textContent =
 "tu as " + age + " ans en " + aujourdhui.toLocaleDateString() + ". " + statut;
});


