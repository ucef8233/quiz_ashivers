/////////// Variable ////////
const demarage = document.getElementById("demarer");
let sect = document.querySelectorAll(".sect");
let question = document.querySelector(".questions");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");
const afficheResultat = document.getElementById("resultat");
let progress = document.getElementById("file");
let afficheNum = document.getElementById("afficheNum");
var conter = 0;
var resultat = [];
let valeur = 1;

//////////////// Demarage //////////
demarage.addEventListener("click", () => {
  sect[0].classList.add("affiche");
  sect[1].classList.remove("affiche");
  question.innerHTML = questions[0];
  inputs = document.querySelectorAll(".answer-inputs input");
  precedent.classList.add("affiche");
  suivant.setAttribute("disabled", "disabled");
  progressBar(conter, valeur);
  recuperation();
});
/////// ProgresseBar //////////////////
progressBar = (e, x) => {
  progress.setAttribute("value", e + 1);
  afficheNum.innerHTML = x + "/" + questions.length;
};

///// Suivant //////
suivant.addEventListener("click", (e) => {
  if (conter < questions.length - 1) {
    valeur++;
    conter++;
  }
  if (conter == questions.length - 1) {
    suivant.classList.add("affiche");
    afficheResultat.classList.remove("affiche");
  }
  question.innerHTML = questions[conter];
  inputs = document.querySelectorAll(".answer-inputs input");
  precedent.classList.remove("affiche");
  suivant.setAttribute("disabled", "disabled");
  progressBar(conter, valeur);
  recuperation();
  e.preventDefault();
});
////////////// Precedent ////////////////////
precedent.addEventListener("click", (e) => {
  afficheResultat.classList.add("affiche");
  suivant.classList.remove("affiche");
  if (conter > 0) {
    conter--;
  }
  if (conter == 0) {
    precedent.classList.add("affiche");
  }
  question.innerHTML = questions[conter];
  inputs = document.querySelectorAll(".answer-inputs input");
  recuperation();
  e.preventDefault();
});
////// recuperation des resultat ///////////////////
recuperation = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", () => {
      if (inputs.length == 1) {
        resultat.splice(conter, 1, inputs[0].value);
        suivant.removeAttribute("disabled");
      } else {
        if (inputs[i].checked == true) {
          resultat.splice(conter, 1, inputs[i].value);
          suivant.removeAttribute("disabled");
        }
      }
    });
  }
};
