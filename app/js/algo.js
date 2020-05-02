tabSymptome = [];
tabfacteurPronostique = [];
tabfacteurMineur = [];
tabfacteurMajeur = [];

resultSyptome = 0;
resultFacteurPronostique = 0;
resultfacteurMineur = 0;
resultfacteurMajeur = 0;

trireponces = () => {
  for (let i = 0; i < resultat.length; i++) {
    if (i == 1) {
      tabfacteurMineur.push(resultat[i]);
      tabfacteurMajeur.push(resultat[i]);
    } else if (i >= 11 && i <= 21) {
      tabfacteurPronostique.push(resultat[i]);
    } else if (i == 7 || i == 8) {
      tabfacteurMajeur.push(resultat[i]);
    } else if (i == 6 || i == 9) {
      tabfacteurMineur.push(resultat[i]);
    }
    if (i >= 0 && i <= 9) {
      tabSymptome.push(resultat[i]);
    }
  }
};

nombreDeFacteur = () => {
  for (let i = 0; i < tabSymptome.length; i++) {
    if (tabSymptome[i] == "Oui") {
      resultSyptome++;
    }
  }
  for (let i = 0; i < tabfacteurPronostique.length; i++) {
    if (tabfacteurPronostique[i] >= 70 || tabfacteurPronostique[i] == "Oui") {
      resultFacteurPronostique++;
    }
  }
  for (let i = 0; i < tabfacteurMineur.length; i++) {
    if (
      tabfacteurMineur[i] >= 39 ||
      tabfacteurMineur[i] == "Oui" ||
      tabfacteurMineur[i] == "Très fatigué" ||
      tabfacteurMineur[i] == " fatigué"
    ) {
      resultfacteurMineur++;
    }
  }
  for (let i = 0; i < tabfacteurMajeur.length; i++) {
    if (tabfacteurMajeur[i] <= 35.4 || tabfacteurMajeur[i] == "Oui") {
      resultfacteurMajeur++;
    }
  }
};
let messageFinal = document.getElementById("affichageResult");
Algorithme = () => {
  if (
    resultat[0] == "Oui" ||
    (resultat[2] == "Oui" && resultat[4] == "Oui") ||
    (resultat[2] == "Oui" && resultat[3] == "Oui") ||
    (resultat[0] == "Oui" && resultat[5] == "Oui")
    //Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
  ) {
    if (resultFacteurPronostique == 0) {
      if (
        resultfacteurMajeur == 0 &&
        resultfacteurMineur == 0 &&
        resultat[10] < 50
      ) {
        messageFinal.innerText = messageAffiche[0];
      } else if (
        resultfacteurMajeur == 0 &&
        resultfacteurMineur >= 1 &&
        (resultat[10] >= 50 || resultat[10] <= 69)
      ) {
        messageFinal.innerText = messageAffiche[1];
      }
    } else {
      if (resultfacteurMajeur == 0 && resultfacteurMineur <= 1) {
        messageFinal.innerText = messageAffiche[1];
      } else if (resultfacteurMajeur == 0 && resultfacteurMineur >= 2) {
        messageFinal.innerText = messageAffiche[2];
      }
    }
    if (resultfacteurMajeur >= 1) {
      messageFinal.innerText = messageAffiche[2];
    }
  } else if (resultat[0] == "Oui" && resultat[2] == "Oui") {
    if (resultFacteurPronostique == 0) {
      if (resultfacteurMajeur == 0 && resultfacteurMineur >= 1) {
        messageFinal.innerText = messageAffiche[3];
      }
    } else {
      if (resultfacteurMajeur == 0 && resultfacteurMineur <= 1) {
        messageFinal.innerText = messageAffiche[3];
      } else if (resultfacteurMajeur == 0 && resultfacteurMineur > 1) {
        messageFinal.innerText = messageAffiche[2];
      }
    }
    if (resultfacteurMajeur > 0) {
      messageFinal.innerText = messageAffiche[2];
    }
  } else if (
    resultat[0] == "Oui" ||
    resultat[2] == "Oui" ||
    resultat[3] == "Oui" ||
    resultat[4] == "Oui"
  ) {
    if (resultfacteurMajeur == 0 && resultfacteurMineur == 0) {
      messageFinal.innerText = messageAffiche[4];
    } else {
      if (resultFacteurPronostique > 0) {
        messageFinal.innerText = messageAffiche[4] + " " + messageAffiche[2];
      }
    }
  } else if (resultSyptome == 0) {
    messageFinal.innerText = messageAffiche[5];
  } else if (resultat[10] < 15) {
    messageFinal.innerText = messageAffiche[6];
  }
};
