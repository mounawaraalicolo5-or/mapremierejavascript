//je recupere un element situé dans le fichier HTML
let elementBoutonValide =document.getElementById("boutonValide");

// la variable elementBoutonValide contient maintenant le bouton HTML
console.log(document.getElementById("nom") );


console.log( elementBoutonValide.clientHeights );

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


  //je recupere la liste des communes a mayotte,
  //puis je stocke les communes dans la variable elementListCommunes
  let elmentListCommunes = document.querySelector("#listCommunes");
 console.log(elmentListCommunes);


 //jutulise la boucle for pour parcourir la liste elmentListCommunes
 for(let i = 0; i< elmentListCommunes.length; i=i+1) {


    console.log(elmentListCommunes[i]);

    }

    //jutilise queryselectorAll pour recuperer tout les membres de la meme classe

    let elementClassCommunes = document.querySelectorAll(".commune");
    
for(let i = 0; i < elementClassCommunes.length ; i=i+1) {

    console.log(elementClassCommunes[i]);
}



let i = 4;
for(i =0; i < 8; i=i+1){

  console.log(elementClassCommunes[i]);
  console.log(elementClassCommunes[i].textContent);

}

//j'insere des balise dans le fichier HTML grace au code javscript

//je crée un element  (balise) nommé <section>
let elementSection = document.createElement("section");


//je recupere la balide <body> , puis je stoke <body> dans la variable elementBody
let elementBody = document.querySelector('body');

//j'ajoute la section du body
elementBody.appendChild(elementSection);

//j'ai crée un titre 3
let nouveauTitre = document.createElement("h3");

//je met le texte du titre
nouveauTitre.textContent="Mon titre de la section";

////j'ajoute le titre dans ma section
elementSection.appendChild(nouveauTitre);


//j'ai crée une nouvelle balise (section)appeler maman
let elementMaman = document.createElement('Maman');

//j'ajoute cette balise maman dans le body
elementBody.appendChild(elementMaman);

//je crée un deuxieme titre h3
let nouveauTitre3 = document.createElement("h3");

//je met le texte du titre
nouveauTitre3.textContent="Bonjour maman";

//j'ajoute le titre dans la balise maman
elementMaman.appendChild(nouveauTitre3);


//crée la balise img
let elementimage = document.createElement("img");

// je definie le chemin de mon image (image.jpg)
elementimage.src = "images.jpg";

//j'ajoute un texte alternatif a mon image
elementimage.setAttribute("alt","la femme mahoraise");

elementimage.className="images.jpg";

elementimage.classList.add("images", "images");

elementimage.classList.remove("images")

// j'ajoute l'image dans le body de la page
elementBody.appendChild(elementimage);



