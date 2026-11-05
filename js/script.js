function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p

  const demoDiv = document.getElementById("demo");
  demoDiv.innerHTML = "";

  const qty = parseInt(document.getElementById("qty").value);
  const titre = document.getElementById("titre").value;
  const contenu = document.getElementById("contenu").value;

  

  for(let i =0; i < qty; i++){
    const monTitre = document.createElement("h2");
    monTitre.textContent = `${titre} ${i}`;
    monTitre.setAttribute("monId","Id" + i);

    const monPara = document.createElement("p");
    monPara.textContent = contenu + " " + i;

    demoDiv.appendChild(monTitre);
    demoDiv.appendChild(monPara);


    monTitre.addEventListener("mousedown",(event) => {clickTitre(event)});
  }
}

function clickTitre(event){
  console.log(event);
  console.log(event.target);
  console.log(event.target.getAttribute("monId"));

  if(event.target.style.backgroundColor ==="gray"){
    event.target.style.backgroundColor ="white";
  }
  else{
    event.target.style.backgroundColor = "gray";
  }
}

function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  const couleur = document.getElementById("couleur").value;
  const lesD = document.getElementById("demo");
  const lesP = lesD.getElementsByTagName("p");

  for (let i = 0; i < lesP.length; i++) {
    lesP[i].style.color = couleur;
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input

  const NouvCouleur = document.getElementById("btnClass").value;
  const boutons = document.getElementsByTagName("button");

  for(let i = 0 ; i < boutons.length; i++){
    boutons[i].className = NouvCouleur;
  }
}