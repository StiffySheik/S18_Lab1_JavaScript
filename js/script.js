function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p

  const element = document.getElementById("demo");
  const qty = parseInt(document.getElementById("qty").value);
  const titre = document.getElementById("titre").value;
  const contenu = document.getElementById("contenu").value;

  for(let i =0; i < qty; i++){
    const monTitre = document.createElement("h2")
    monTitre.textContent = titre + " " + i;

    const monPara = document.createElement("p")
    monPara.textContent = contenu + " " + i;

    element.appendChild(monTitre)
    element.appendChild(monPara)
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  const couleur = document.getElementById("couleur").value;
  const lesD = document.getElementById("demo"); // Suppression du '#'
  const lesP = lesD.getElementsByTagName("p");

  for (let i = 0; i < lesP.length; i++) {
    lesP[i].style.color = couleur;
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input

  const nouvelleClsse = document.getElementById("btnClass").value;
  const boutons = document.getElementsByTagName("button")

  for(let i = 0 ; i < boutons.length; i++){
    boutons[i].className = nouvelleClsse
  }
}