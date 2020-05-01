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

const questions = [
  `<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>
    <div class="answer-inputs">
      <div>
          <input type="radio" name="Q1"  id="Oui" value="Oui">
          <label for="Oui"><span>Oui</span> </label>
      </div>
      <div>
          <input type="radio" name="Q1" id="Non" value="Non">
          <label for="Non"><span>Non</span> </label>
      </div>
    </div>`,
  `<p class="form__question--c">Quelle est votre température corporelle ?</p>
  <div class="answer-inputs">
    <input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42">
    <span class="input-span">degrés</span></div>
  
`,
  `<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>
  <div class="answer-inputs">
    <div>
         <input type="radio" name="Q1"  id="Oui" value ="Oui">
         <label for="Oui"><span>Oui</span> </label>
    </div>
    <div>
         <input type="radio" name="Q1"  id="Non" value="Non"><label for="Non"><span>Non</span> </label>
    </div>
  </div>`,
];
