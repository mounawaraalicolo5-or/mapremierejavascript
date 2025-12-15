//je recupere un element situé dans le fichier HTML
let elementBoutonValide =document.getElementById("boutonValide");

// la variable elementBoutonValide contient maintenant le bouton HTML
console.log(document.getElementById("nom") );


console.log( elementBoutonValide.clientHeights);

let elementInputNom = document.querySelector("#nom")


//j'affiche l'element recuperer dans la console
console.log(document.head);
console.log(document.title);
console.log(document.body);


let elementDivRecensement = document.querySelector("#recencement");
console.log(elementDivRecensement);

// je recupere l'element HTML dont l'identifiant est recensement
elementBoutonValide.addEventListener("click", function () {
console.log("elementboutonValide:", elementBoutonValide);
  });