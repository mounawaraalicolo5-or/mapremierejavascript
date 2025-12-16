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