const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Mise en place des constantes pour les flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

//Declaration de la variable slideIndex à 0
let slideIndex = 0;

//event listener clic gauche
arrowLeft.addEventListener("click", () => {
  if (slideIndex == 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex -= 1;
  }
  updateBannerImgAndTagLine();
  updateDotSelected();
  console.log("Vous avez cliqué sur la flèche gauche");
});

// event listener clic droit
arrowRight.addEventListener("click", () => {
  if (slideIndex == slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex += 1;
  }
  updateBannerImgAndTagLine();
  updateDotSelected();
  console.log("Vous avez cliqué sur la flèche droite");
});

// Récupération de la balise générale "dots" contenant les div enfants à créer
const dotsContainer = document.querySelector(".dots");

// Mise en place des bullets-points

for (let i = 0; i < slides.length; i++) {
  const newDot = document.createElement("div");
  newDot.classList.add("dot");
  dotsContainer.appendChild(newDot);
  // sélection du premier bullet point dans le tableau
  if (i == 0) {
    dotsContainer.children[i].classList.add("dot_selected");
  }
}

// Récupération des bullets points créés
const dot = document.querySelectorAll(".dot");

// Fonction de mise à jour du bullet point actif/selectionné
function updateDotSelected() {
  for (let i = 0; i < dot.length; i++) {
    if (i == slideIndex) {
      dot[i].classList.add("dot_selected");
    } else {
      dot[i].classList.remove("dot_selected");
    }
  }
}
// récupération des images et des textes (tagLines) de la bannière
const banner = document.getElementById("banner");
const bannerImage = document.querySelector(".banner-img");
const bannerTagLine = document.querySelector(".bannerTagLine");

// Fonction pour ajout des images et des tagLines
function updateBannerImgAndTagLine() {
  bannerImage.src = "./assets/images/slideshow/" + slides[slideIndex].image;
  bannerTagLine.innerHTML = slides[slideIndex].tagLine;
}
