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




})

